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

export const Content = styled.div``;

export const BackButton = styled.button`
  color: #a3b2a3;
  border: 0;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
  }
`;

export const DetailMovie = styled.div`
  display: flex;
  margin-top: 33px;

  div {
    flex: 1;

    h1 {
      color: #414641;
      font-size: 70px;
    }

    p {
      color: #637463;
      font-size: 28px;
      font-weight: 600;
      margin-top: 48px;
    }
  }

  img {
    width: 443px;
    height: 657px;
    margin-left: 40px;
    border-radius: 6px;
  }

  @media only screen and (max-width: 1366px) {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 1145px) {
    flex-direction: column;

    img {
      margin-left: 0;
      margin-top: 40px;
      align-self: center;
    }
  }

  @media only screen and (max-width: 768px) {
    div {
      h1 {
        font-size: 50px;
      }

      p {
        font-size: 22px;
      }
    }
  }

  @media only screen and (max-width: 460px) {
    img {
      width: 323px;
      height: 500px;
    }
  }
`;

export const Time = styled.div`
  display: flex;
  margin-top: 58px;
  margin-bottom: 30px;

  span {
    color: #414641;
    font-size: 26px;
    margin-right: 50px;
    font-weight: bold;

    display: flex;
    align-items: center;

    svg {
      margin-right: 12px;
    }
  }

  button {
    color: #fcfcfc;
    font-size: 26px;
    font-weight: bold;
    padding: 3px 12px;
    border: 0;
    border-radius: 5px;
    background: #eb4b3c;
  }

  @media only screen and (max-width: 768px) {
    span {
      margin-right: 30px;
      font-size: 20px;
    }
  }
`;

export const FavoriteButton = styled.button`
  color: #fcfcfc;
  background: #eb4b3c;
  border: 0;
  border-radius: 6px;
  padding: 8px 15px;
  font-size: 22px;
  font-weight: bold;

  display: flex;
  align-items: center;

  svg {
    margin-right: 15px;
  }
`;

export const AddToFavoriteButton = styled.button`
  border: 0;
  background: transparent;

  color: #637463;
  font-size: 22px;
  font-weight: bold;

  display: flex;
  align-items: center;

  div {
    padding: 8px;
    border: 2px solid #eb4b3c;
    border-radius: 6px;
    color: #eb4b3c;
    margin-right: 10px;

    display: flex;
    align-items: center;
    justify-items: center;
  }
`;

export const Categories = styled.div`
  display: flex;
  margin-top: 33px;

  div {
    display: flex;
    flex-direction: column;

    h3 {
      color: #637463;
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 15px;
    }
  }
`;
