import { getMoviesByQuery } from 'routes/movies';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Wrapper, StyledLoader } from './page.styled';

const MovieSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const getMoviesByQueryFromApi = async () => {
      try {
        const query = searchParams.get('query');
        if (!query) return;
        setIsLoading(true);
        const { results } = await getMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesByQueryFromApi();
  }, [searchParams, setIsLoading]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target[0].value) {
      alert('Please enter your search query!');
    }
    e.target[0].value && setSearchParams({ query: e.target[0].value });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <StyledLoader>Loading...</StyledLoader>}
      {movies && (
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link state={location} to={`${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default MovieSearch;
