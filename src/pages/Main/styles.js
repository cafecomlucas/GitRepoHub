import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  min-width: 280px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 0 auto;

  h1 {
    font-size: 22px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      justify-content: center;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  input {
    flex: 1;
    border: 1px solid #b7b7b7;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    input {
      text-align: center;
      min-width: 100%;
    }
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(0deg)
  }
  from {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props['loading-data'],
}))`
  background: #7159c1;
  border: 0;
  padding: 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    background: #a7a7a7;
    opacity: 0.6;
  }

  ${props =>
    props['loading-data'] && // (funciona como um if sem else)
    css`
      svg {
        animation: ${rotate} 1s linear infinite;
      }
    `}

  @media screen and (max-width: 480px) {
    margin: 10px 0 0 0;
    flex: 1;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;

    & + li {
      /** aplica em todas lis, menos na primeira */
      /** (aplica em todas lis que tem uma li irmã antes delas) */
      border-top: 1px solid #b7b7b7;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
