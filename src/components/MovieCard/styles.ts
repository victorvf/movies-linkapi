import styled from 'styled-components';

const Width = '171px';
const Height = '254px';

export const Container = styled.div`
  color: #fcfcfc;
  width: ${Width};
  height: ${Height};
  position: relative;

  &:hover {
    > svg {
      visibility: hidden;
    }

    div.hover-content {
      visibility: visible;
      opacity: 1;
    }
  }

  > svg {
    visibility: visible;
    position: absolute;
    top: 11px;
    right: 16px;
  }

  div.hover-content {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    width: ${Width};
    height: ${Height};
    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 2px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: opacity 0.3s;

    > button {
      color: #fcfcfc;
      border: 0;
      background: transparent;
      width: 30px;
      align-self: flex-end;
    }

    div {
      button {
        border: 0;
        color: #fcfcfc;
        background: transparent;
        display: block;
        font-size: 16px;
        font-weight: bold;
      }

      span {
        font-size: 12px;
      }
    }
  }
`;

export const ImageContent = styled.div`
  img {
    width: ${Width};
    height: ${Height};
    border-radius: 2px;
  }
`;
