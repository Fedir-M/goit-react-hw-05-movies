import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY_API = '1a445eae4016989e0c5f5f78904ac14c';

export async function getTrendingMovies(page = 1) {
  const data = await axios.get(`trending/movie/day`, {
    params: {
      api_key: KEY_API,
      language: 'en - US',
      page,
    },
  });

  return data;
}

export async function getSearchgMovies(query, page = 1) {
  const data = await axios.get(`search/movie`, {
    params: {
      api_key: KEY_API,
      query,
      include_adult: true,
      language: 'en - US',
      page,
    },
  });

  return data;
}

export async function getMovieById(id) {
  const data = await axios.get(`movie/${id}`, {
    params: {
      api_key: KEY_API,
      language: 'en - US',
    },
  });

  return data;
}

export async function getCast(id) {
  const data = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: KEY_API,
      language: 'en - US',
    },
  });

  return data;
}

export async function getReviews(id) {
  const data = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: KEY_API,
      language: 'en - US',
    },
  });

  return data;
}
