import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #01232e;
  gap: 10px;
  align-items: center;
  p {
    font-weight: 500;
    align-self: flex-start;
  }
  ul {
    display: flex;
    gap: 20px;
    font-weight: 500;
  }
  h2 {
    font-style: oblique;
    color: #01232e;
    text-transform: uppercase;
  }
  span {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const StyledInfoNav = styled.nav`
  display: flex;
  gap: 20px;
  a {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    border-radius: 8px;
    color: #099693;
    border: 1px solid #099693;
    box-shadow: 0 0 5px #099693, 0 0 5px #099693 inset;
    max-width: 100px;
    min-width: 95px;
    &:after {
      position: absolute;
      content: ' ';
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: #ff9aff;
      transition: all 0.3s ease;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    &:before {
      height: 0%;
      width: 2px;
    }
    &:hover {
      color: #0e0e0e;
      box-shadow: inset 0 0 10px #099693, 0 0 20px #099693 inset,
        0 0 20px #099693 inset;
    }
    &.active {
      color: #0e0e0e;
      box-shadow: inset 0 0 10px #099693, 0 0 20px #099693 inset,
        0 0 20px #099693 inset;
    }
  }
`;
