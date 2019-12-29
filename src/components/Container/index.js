import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
