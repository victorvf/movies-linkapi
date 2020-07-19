import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 0 60px;
  }

  @media only screen and (max-width: 430px) {
    padding: 0 20px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: baseline;

  > div {
    flex: 1;
  }

  button {
    border: 0;
    color: #a0afa0;
    background: transparent;

    margin-left: 30px;
    transition: color 0.3s;

    &:hover {
      color: #414641;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      width: 100%;
      margin-bottom: 40px;
    }

    button {
      margin-left: 0;
    }
  }
`;

export const MovieError = styled.div`
  padding-top: 144px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    width: 310px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
      width: 291px;
    }

    strong {
      color: #a4ada4;
      font-size: 22px;
    }

    span {
      color: #a0afa0;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 60px 0 20px;
  }
`;

export const MovieContainer = styled.div`
  margin-top: 60px;

  display: grid;
  grid-template-columns: repeat(auto-fit, 171px);
  column-gap: 15px;
  row-gap: 24px;
  justify-content: center;

  @media only screen and (max-width: 1366px) {
    margin-bottom: 30px;
  }
`;
