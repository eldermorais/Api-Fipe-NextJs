import styled, { keyframes } from 'styled-components';

const appearFrontLeft = keyframes`
from{
  opacity: 0;
  transform: translateX(-50px);
}
to{
  opacity: 1;
  transform: translateX(0);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  /* justify-content: center; */
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  background: #192a56;

  div {
    margin-bottom: 8px;
  }

  > h1 {
    color: #f1f2f6;
    font-weight: 700;
    margin: 24px auto;
  }

  > div:nth-child(8) {
    margin-top: 24px;
  }
  h2 {
    color: #ff4757;
    animation: ${appearFrontLeft} 1s;
    margin-bottom: 8px;
    text-align: center;
  }
  p {
    color: #f1f2f6;
    margin-bottom: 24px;
  }

  h3 {
    color: #2ed573;
    margin-bottom: 24px;
  }

  select {
    width: 400px;
    height: 36px;
    display: flex;
    border: solid 1px #dbdbdb;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #57606f;
    font-weight: 700;
    transition: filter 0.5s;

    &:disabled {
      background-color: #192a56;
      color: #f1f2f6;
      filter: contrast(0.5);
    }

    &:focus {
      transform: scale(1.02);
    }
  }
  option {
    color: #57606f;
    font-weight: 700;
  }
`;
