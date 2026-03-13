const apiconfig = {
    api_key: '${process.env.API_KEY}',
    base_url: '${process.env.API_BASE_URL}'
};

export const getPopularMovies = async () => {
    const response = await fetch(`${base_url}/movie/popular?api_key=${api_key}`);
    const data = await response.json();
    return data.result;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.result;
};
