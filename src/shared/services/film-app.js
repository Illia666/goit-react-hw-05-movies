import axios from 'axios';

const KEY = 'b0b4fd1b10f37d2fc7069fdd28d61a74';
export const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: KEY,
    language: 'en-US',
  },
});

export const getMoviesPopular = async (page = 1) => {
  const { data } = await instance.get('trending/movie/day', {
    params: {
      page,
    },
  });
  return data;
};

export const fetchMovieDetails = async (id, path) => {
  const { data } = await instance.get(`movie/${id}${path}`);
  return data;
};

export const getMoviesSearch = async (page = 1, query) => {
  const { data } = await instance.get('search/movie', {
    params: {
      page,
      query,
      sort_by: 'popularity.desc',
    },
  });
  return data;
};