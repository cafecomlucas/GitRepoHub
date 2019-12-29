import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  height: calc(100vh - 80px);
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
    font-size: 24px;
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
