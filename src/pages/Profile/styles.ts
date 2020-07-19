import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;

  header {
    padding: 70px 0 0;

    > img {
      width: 281px;
    }
  }

  @media only screen and (max-width: 1366px) {
    padding: 0 60px;
  }

  @media only screen and (max-width: 768px) {
    header {
      padding: 50px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  margin-top: 127px;

  p {
    color: #637463;
    text-align: right;
    max-width: 430px;
    font-size: 28px;
    margin-right: 110px;
  }

  @media only screen and (max-width: 1366px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin-right: 0;
    }
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  form {
    flex: 1;
    width: 320px;
    display: flex;
    flex-direction: column;

    span {
      color: #414646;
      margin-bottom: 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    form {
      margin-top: 80px;
    }
  }

  @media only screen and (max-width: 375px) {
    form {
      width: 280px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 80px;
  display: flex;
  align-self: flex-end;
  justify-content: center;

  button {
    width: 150px;
    border: 0;
    padding: 12px 18px;
  }

  button.cancel_button {
    color: #a0afa0;
    background: transparent;
    font-weight: bold;
    margin-right: 10px;
    transition: color 0.3s;

    &:hover {
      color: #eb4b3c;
    }
  }

  button.submit_button {
    background: #3cc896;
    border-radius: 6px;
    color: #fcfcfc;
    font-weight: bold;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media only screen and (max-width: 1024px) {
    align-self: center;
  }

  @media only screen and (max-width: 375px) {
    button {
      width: 120px;
    }
  }
`;
