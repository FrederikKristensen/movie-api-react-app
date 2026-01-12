const API_KEY = process.env.API_KEY
const BASE_URL = process.env.API_BASE_URL

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.result;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponen(query)}`);
    const data = await response.json();
    return data.result;
};