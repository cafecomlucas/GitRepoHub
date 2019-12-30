import styled from 'styled-components';

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
    border-radius: 50%;
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
    color: #7159c1;
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

export const IssueList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #b7b7b7;
  h2 {
    font-size: 18px;
    margin: 0 0 30px 0;
    color: #777;
    text-align: center;
  }
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
      max-height: 48px;
      border: 4px solid #b7b7b7;
      border-radius: 50%;
    }
    div {
      flex: 1; /** para não passar da borda em telas muito pequenas (ativa o shrink 1) */
      margin-left: 15px;
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
            color: #7159c1;
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
