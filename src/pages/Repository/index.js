/* eslint-disable camelcase */
import React, { Component } from 'react';
import api from '../../services/api';
import { Loading } from './styles';

export default class Repository extends Component {
  state = {
    repository: [],
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const client_id = '61dc96b8c51a5d2b9e0b';
    const client_secret = 'e812178db64b10903ee5f6572cf952efbb1730f2';
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    console.log(repoName);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`, {
        params: {
          client_id,
          client_secret,
        },
      }),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          client_id,
          client_secret,
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });

    console.log(this.state);
  }

  render() {
    const { loading } = this.state;

    if (loading) return <Loading>Carregando...</Loading>;

    return <h1>Repository</h1>;
  }
}
