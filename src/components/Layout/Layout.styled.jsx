import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Styled components
export const LayoutContainer = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #f0f0f0;
  padding: 10px 0;
`;

export const Navigation = styled.nav`
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;
  color: black;

  &.active {
    color: blue;
  }

  &:hover {
    color: darkblue;
  }
`;
