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
`;

export const ButtonsContainer = styled.div`
  margin-top: 80px;
  align-self: flex-end;

  button {
    width: 160px;
    border: 0;
    padding: 12px 18px;
  }

  button.cancel_button {
    color: #a0afa0;
    background: transparent;
    font-weight: bold;
    margin-right: 10px;
    transition: color 0.3s, border-bottom 0.1s;

    &:hover {
      color: #eb4b3c;
      border-bottom: 2px solid #eb4b3c;
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
`;
