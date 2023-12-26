import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  LayoutContainer,
  Header,
  Navigation,
  StyledNavLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <Navigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Navigation>
      </Header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};

export default Layout;
