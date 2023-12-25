import React from 'react';
import { Home } from '../pages/Home';
import { MovieSearch } from '../pages/MovieSearch';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from './Cast';
import { Review } from './Reviews';

export const App = () => {
  return (
    <>
      <nav className={'navigation'}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieSearch />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
