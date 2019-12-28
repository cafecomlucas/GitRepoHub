import React, { Component } from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
  };

  handleInputChange = e => {
    const newRepo = e.target.value;
    this.setState({ newRepo });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { newRepo, repositories } = this.state;

    const { data } = await api.get(`/repos/${newRepo}`);
    // mesmo com um item só os dados são guardados em um objeto
    // para ficar mais fácil de adicionar novos itens caso necessário
    const repository = {
      name: data.full_name,
    };

    this.setState({ repositories: [...repositories, repository], newRepo: '' });
  };

  render() {
    const { newRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton type="submit">
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
