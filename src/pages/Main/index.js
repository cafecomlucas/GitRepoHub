import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default () => (
  <Container>
    <h1>
      <FaGithubAlt />
      Repositórios
    </h1>

    <Form>
      <input type="text" placeholder="Adicionar repositório" />
      <SubmitButton disabled>
        <FaPlus color="#FFF" size={14} />
      </SubmitButton>
    </Form>
  </Container>
);
