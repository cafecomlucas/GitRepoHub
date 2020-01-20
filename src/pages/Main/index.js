/* eslint-disable camelcase */
import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    const repositories = JSON.parse(localStorage.getItem('repositories'));

    if (repositories) this.setState({ repositories });
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (repositories !== prevState.repositories)
      localStorage.setItem('repositories', JSON.stringify(repositories));
  }

  handleInputChange = e => {
    const newRepo = e.target.value;
    this.setState({ newRepo });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { loading } = this.state;
    // se estiver carregando um repositório
    if (loading) {
      // sai da função pra não tentar carregar outro
      return;
    }

    this.setState({ loading: true, error: false });

    try {
      const client_id = '61dc96b8c51a5d2b9e0b';
      const client_secret = 'e812178db64b10903ee5f6572cf952efbb1730f2';
      const { newRepo, repositories } = this.state;

      const repositoryExists = repositories.find(
        repository => newRepo === repository.name
      );

      if (repositoryExists) {
        throw new Error('Repositório duplicado');
      }

      const { data } = await api.get(`/repos/${newRepo}`, {
        params: {
          client_id,
          client_secret,
        },
      });

      // mesmo com um item só, os dados são guardados em um objeto
      // para ficar mais fácil de adicionar novos itens caso necessário
      const repository = {
        name: data.full_name,
        avatar: data.owner.avatar_url,
      };

      this.setState({
        repositories: [repository, ...repositories],
        newRepo: '',
        loading: false,
      });
    } catch (err) {
      this.setState({ error: false }, () =>
        setTimeout(() => this.setState({ error: true }), 1)
      );
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { newRepo, repositories, loading, error } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          GitRepoHub
        </h1>
        <h2>Adicione um repositório</h2>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Nome do repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton type="submit" loading-data={loading}>
            {loading ? (
              <FaSpinner className="spinner" color="#FFF" />
            ) : (
              <FaPlus color="#FFF" />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>
                <img src={repository.avatar} alt={repository.name} />{' '}
                {repository.name}
              </span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
