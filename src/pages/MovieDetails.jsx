import { getInformation } from 'routes/movies';
import React, { useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  StyledContainer,
  StyledInfo,
  StyledInfoNav,
  StyledInfoWrapper,
} from './movie.styled';
import { Wrapper, StyledLoader } from './page.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const goBackRef = useRef(location.state);

  useEffect(() => {
    const getInfoFromApi = async () => {
      try {
        setIsLoading(true);
        const res = await getInformation(id);

        setMovieInfo(res);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getInfoFromApi();
  }, [id]);

  const handleGoBack = () => {
    navigate(goBackRef.current ?? '/');
  };

  return (
    <Wrapper>
      <StyledContainer>
        <button onClick={handleGoBack}>Go Back</button>
        <StyledInfoWrapper>
          <img
            src={
              movieInfo.poster_path &&
              `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
            }
            alt={movieInfo.original_title}
            width="250"
          />
          <StyledInfo>
            {isLoading && <StyledLoader>Loading...</StyledLoader>}
            <h1>{movieInfo.original_title}</h1>
            <p>
              <span>User Score: </span>
              {movieInfo.vote_average}
            </p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>

            <ul>
              {movieInfo.genres &&
                movieInfo.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
          </StyledInfo>
        </StyledInfoWrapper>
        <StyledInfoNav>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </StyledInfoNav>
      </StyledContainer>
      <Outlet />
    </Wrapper>
  );
};

export default MovieDetails;
