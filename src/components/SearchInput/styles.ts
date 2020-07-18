import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 0;
  padding: 8px;
  color: #a0afa0;
  background: transparent;
  border-bottom: 2px solid #a0afa0;

  display: flex;
  align-items: center;

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #37b987;
      border-bottom: 2px solid #37b987;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #37b987;
    `}

  input {
    flex: 1;
    border: 0;
    color: #a0afa0;
    background: transparent;

    &::placeholder {
      color: #a0afa0;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
