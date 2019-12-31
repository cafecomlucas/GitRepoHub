import styled, { keyframes, css } from 'styled-components';

const error = keyframes`
  from{left:-10px;border-color:red;box-shadow: 0 0 0 red;}
  12.5%{left:10px}
  25%{left:-5px;box-shadow: 0 0 5px red;}
  37.5%{left:5px;}
  50%{left:0;border-color:red;}
  90%{box-shadow: 0 0 0 red;}
  to{border-color:#b7b7b7;box-shadow: 0 0 0 red;}
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
    ${props =>
      props.error &&
      css`
        position: relative;
        top: 0;
        left: 0;
        animation: ${error} 500ms ease-out;
        margin-left: 0;
      `}
  }
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    input {
      text-align: center;
      min-width: 100%;
    }
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

  @media screen and (max-width: 480px) {
    margin: 10px 0 0 0;
    flex: 1;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-top: 30px;

  li {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
      text-align: right;
      &:hover {
        text-decoration: underline;
      }
      @media screen and (max-width: 480px) {
        flex: 1;
        padding: 6px;
      }
    }
  }
`;
