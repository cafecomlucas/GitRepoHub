import styled, { css } from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  height: calc(100vh - 20px);
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 128px;
    height: 128px;
    border-radius: 5%;
  }
  h1 {
    font-size: 28px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    max-width: 400px;
    text-align: center;
  }
  a {
    color: #4d7999;
    font-size: 16px;
    margin-bottom: 20px;
    padding: 10px;
    text-decoration: none;
    text-align: center;
    min-width: 100%;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const IssueFilter = styled.ul`
  margin: 30px 0 30px 0;
  padding-top: 0;
  border-top: 1px solid #b7b7b7;
  h2 {
    font-size: 18px;
    margin: 0 0 30px 0;
    color: #777;
    text-align: center;
    font-weight: bold;
  }
  div {
    display: flex;
    border: 1px solid #b7b7b7;
    border-radius: 4px;
    overflow: hidden;

    button {
      outline: 0;
      font-size: 12px;
      font-weight: bold;
      padding: 7px;
      flex: 1;
      border: 0;
      background: #eaeaea;
      & + button {
        border-left: 1px solid #b7b7b7;
      }
      &.active {
        font-weight: normal;
        color: #eaeaea;
        background: #333;
      }
    }
  }
`;

export const ContainerIssuesList = styled.div`
  transition: none;
  transition: all 400ms ease-out;
  opacity: 1;

  min-height: 440px;
  ${props =>
    props.loadingFilter &&
    css`
      transition: none;
      transition: all 400ms ease-in;
      opacity: 0;
    `}
`;

export const LoadingIssues = styled.div`
  display: flex;
  justify-content: center;
  min-height: 200px;
  svg {
    margin: 20px;
  }
`;

export const IssuePage = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    min-width: 100px;
    font-size: 16px;
    text-align: center;
    span {
      font-weight: bold;
    }
  }
  button {
    outline: 0;
    font-size: 14px;
    width: 50px;
    min-width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 5px;
    background: #eaeaea;
    border: 1px solid #b7b7b7;
    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const IssueList = styled.ul`
  li {
    display: flex;

    padding: 15px 10px;
    border: 1px solid #b7b7b7;
    border-radius: 4px;
    & + li {
      margin-top: 20px;
    }
    img {
      max-width: 48px;
      min-width: 48px;
      max-height: 48px;
      width: 48px;
      height: 48px;
      border: 4px solid #b7b7b7;
      background: #b7b7b7;
      border-radius: 50%;
    }
    div {
      flex: 1; /** para não passar da borda em telas muito pequenas (ativa o shrink 1) */
      margin-left: 15px;
      overflow: hidden;
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
      strong {
        font-size: 16px;
        a {
          color: #333;
          text-decoration: none;
          margin-right: 10px;
          &:hover {
            color: #4d7999;
            text-decoration: underline;
          }
        }
        span {
          padding: 5px;
          background: #eee;
          border-radius: 4px;
          font-size: 12px;
          line-height: 15px;
          font-weight: 600;
          margin: 0 5px 5px 0;
          display: inline-block;
        }
      }
    }
  }
`;
