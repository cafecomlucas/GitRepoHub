import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    font-size: 26px;
    color: #000;
    text-decoration: underline;
    cursor: pointer;
  }
`;
