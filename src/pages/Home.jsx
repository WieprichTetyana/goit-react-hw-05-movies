import { getPopularMovies } from 'routes/movies';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrapper, StyledLoader } from './page.styled';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getPopularFromApi = async () => {
      try {
        setIsLoading(true);
        const { results } = await getPopularMovies();
        setPopularMovies(results);
        if (results.length === 0) {
          alert('We don`t have any popular movies for today.');
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPopularFromApi();
  }, [setIsLoading]);

  return (
    <Wrapper>
      <h1>Trending today</h1>
      {isLoading && <StyledLoader>Loading...</StyledLoader>}
      <ul>
        {popularMovies.map(({ id, title }) => (
          <li key={id}>
            <Link state={location} to={`movies/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Home;
