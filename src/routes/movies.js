import { api } from './api';

export async function getPopularMovies() {
  const { data } = await api(
    '/3/trending/movie/day?api_key=8d2a6ab79438c44077ebdefe540f9cf0'
  );

  return data;
}

export async function getMoviesByQuery(query) {
  const { data } = await api(
    `/3/search/movie?api_key=8d2a6ab79438c44077ebdefe540f9cf0&query=${query}`
  );
  return data;
}

export async function getInformation(id) {
  const { data } = await api(
    `3/movie/${id}?api_key=8d2a6ab79438c44077ebdefe540f9cf0`
  );
  return data;
}

export async function getMovieCast(id) {
  const {
    data: { cast },
  } = await api(
    `3/movie/${id}/credits?api_key=8d2a6ab79438c44077ebdefe540f9cf0`
  );
  return cast;
}

export async function getReviews(id) {
  const { data } = await api(
    `/3/movie/${id}/reviews?api_key=8d2a6ab79438c44077ebdefe540f9cf0`
  );
  return data;
}
