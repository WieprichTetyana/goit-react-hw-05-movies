import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <div>
      <StyledLink to="/">Go Back to Home Page</StyledLink>
      <StyledMessage>Page is not found!</StyledMessage>
    </div>
  );
};

export default NotFound;

const StyledMessage = styled.p`
  text-align: center;
  margin-top: 40px;
  color: #025c7a;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2rem;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  margin-top: 20px;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  color: #025c7a;
  border: 1px solid #025c7a;
  box-shadow: 0 0 5px #025c7a, 0 0 5px #025c7a inset;

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
    color: #fff;
    box-shadow: inset 0 0 10px #025c7a, 0 0 20px #025c7a inset,
      0 0 20px #025c7a inset;
  }
`;
