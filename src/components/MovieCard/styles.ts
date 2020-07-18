import styled from 'styled-components';

const Width = '171px';
const Height = '254px';

export const Container = styled.div`
  color: #fcfcfc;
  width: ${Width};
  height: ${Height};
  position: relative;

  &:hover div.hover-content {
    visibility: visible;
    opacity: 1;
  }

  div.hover-content {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;

    width: ${Width};
    height: ${Height};

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    strong {
      display: block;
      font-size: 16px;
      line-height: 10px;
      font-weight: bold;
    }

    span {
      font-size: 12px;
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
