import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 40px;
  h1 {
    color: #0e0b4a;
    font-style: oblique;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #01232e;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  form {
    margin-bottom: 20px;
  }
  input {
    margin-right: 20px;
    border-radius: 4px;
    height: 24px;
    border-color: #01232e;
    color: #01232e;
  }

  button {
    text-decoration: none;
    padding: 10px;
    border-radius: 8px;
    color: #0e1010;
    border: 1px solid #099693;
    box-shadow: 0 0 5px #099693, 0 0 5px #025c7a inset;
    max-width: 100px;
  }
  button:after {
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

  button:before {
    height: 0%;
    width: 2px;
  }
  button:hover {
    color: #fff;
    box-shadow: inset 0 0 10px #025c7a, 0 0 20px #025c7a inset,
      0 0 20px #025c7a inset;
  }
`;

export const StyledLoader = styled.p`
  font-style: oblique;
  color: #099693;
  text-transform: uppercase;
  font-weight: 600;
`;
