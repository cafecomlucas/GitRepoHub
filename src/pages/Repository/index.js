/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Owner,
  IssueList,
  IssueFilter,
  LoadingIssues,
} from './styles';

export default class Repository extends Component {
  client_id = '61dc96b8c51a5d2b9e0b';

  client_secret = 'e812178db64b10903ee5f6572cf952efbb1730f2';

  static propTypes = {
    match: PropTypes.shape({
      // shape é utilizado para objetos
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired, // funciona para todas propriedades dentro do shape
  };

  state = {
    repository: [],
    issues: [],
    loading: true,
    repoName: '',
    repoState: 'open',
    repoStates: ['all', 'open', 'closed'],
    loadingFilter: false,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { repoState } = this.state;
    const repoName = decodeURIComponent(match.params.repository);
    this.setState({ repoName });

    const repository = await api.get(`/repos/${repoName}`, {
      params: {
        client_id: this.client_id,
        client_secret: this.client_secret,
      },
    });

    this.handleFilter(repoState);

    this.setState({
      repository: repository.data,
      loading: false,
    });
  }

  async getIssues(repoState) {
    const { repoName } = this.state;
    return api.get(`/repos/${repoName}/issues`, {
      params: {
        client_id: this.client_id,
        client_secret: this.client_secret,
        state: repoState,
        per_page: 5,
      },
    });
  }

  async handleFilter(repoState) {
    const { loadingFilter } = this.state;
    if (loadingFilter) return;

    this.setState({ repoState, loadingFilter: true });
    const issues = await this.getIssues(repoState);

    this.setState({
      issues: issues.data,
      loadingFilter: false,
    });
  }

  render() {
    const {
      repository,
      issues,
      loading,
      repoState,
      repoStates,
      loadingFilter,
    } = this.state;

    if (loading) return <Loading>Carregando...</Loading>;

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueFilter>
          <h2>Issues</h2>
          <div>
            {repoStates.map(itemState => (
              <button
                className={itemState === repoState ? 'active' : ''}
                type="button"
                key={itemState}
                onClick={() => this.handleFilter(itemState)}
              >
                {itemState}
              </button>
            ))}
          </div>
        </IssueFilter>
        {loadingFilter ? (
          <LoadingIssues>
            <FaSpinner className="spinner" size={18} />
          </LoadingIssues>
        ) : (
          <IssueList>
            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>
                    <a
                      href={issue.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {issue.title}
                    </a>
                    {issue.labels.map(label => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssueList>
        )}
      </Container>
    );
  }
}
