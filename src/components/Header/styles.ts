import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 281px;
  }

  button {
    border: 0;
    background: transparent;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 0;

    img {
      width: 231px;
    }
  }
`;
