/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import CurrentRoute from '../../components/CurrentRoute';
import {
  Loading,
  Owner,
  IssueList,
  IssueFilter,
  LoadingIssues,
  IssuePage,
  ContainerIssuesList,
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
    repoStates: ['open', 'closed', 'all'],
    loadingFilter: false,
    page: 1,
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

  async getIssues(repoState, page) {
    const { repoName } = this.state;
    return api.get(`/repos/${repoName}/issues`, {
      params: {
        client_id: this.client_id,
        client_secret: this.client_secret,
        state: repoState,
        per_page: 3,
        page,
      },
    });
  }

  async handleFilter(repoState, page = 1) {
    const { loadingFilter } = this.state;
    if (loadingFilter) return;

    this.setState({ repoState, loadingFilter: true });
    const issues = await this.getIssues(repoState, page);

    this.setState({
      issues: issues.data,
      loadingFilter: false,
      page,
    });
  }

  async handlePage(page) {
    const { repoState } = this.state;
    this.handleFilter(repoState, page);
  }

  render() {
    const {
      repository,
      issues,
      loading,
      repoState,
      repoStates,
      loadingFilter,
      page,
    } = this.state;
    const { match } = this.props;

    if (loading)
      return (
        <>
          <CurrentRoute>
            <div>
              <strong>Rota: </strong>/
            </div>
          </CurrentRoute>
          <Loading>Carregando...</Loading>
        </>
      );

    return (
      <>
        <CurrentRoute>
          <div>
            <strong>Rota: </strong>/repository/
            {match.params.repository}
          </div>
        </CurrentRoute>
        <Container>
          <Owner>
            <Link to="/">Voltar ao início</Link>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
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
          <ContainerIssuesList loadingFilter={loadingFilter}>
            {loadingFilter ? (
              <LoadingIssues>
                <FaSpinner className="spinner" size={18} />
              </LoadingIssues>
            ) : (
              <>
                <IssuePage page={page}>
                  <button
                    type="button"
                    onClick={() => {
                      this.handlePage(page - 1);
                    }}
                    disabled={page === 1}
                  >
                    {'<'}
                  </button>
                  <div>
                    Página <span>{page}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      this.handlePage(page + 1);
                    }}
                  >
                    {'>'}
                  </button>
                </IssuePage>
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
              </>
            )}
          </ContainerIssuesList>
        </Container>
      </>
    );
  }
}
