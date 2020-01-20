import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  min-width: 280px;
  background: #fcfcfc;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 30px;
  margin: 40px auto 0 auto;
  text-align: left;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
  h1 {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    svg {
      margin-right: 10px;
    }
  }
  h2 {
    padding-top: 30px;
    font-size: 18px;
    font-weight: normal;
  }
`;

export default Container;
