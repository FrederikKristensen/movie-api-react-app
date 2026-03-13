import MovieCard from '../components/MovieCard.tsx';
import { useState, useEffect } from 'react';
import { searchMovies , getPopularMovies } from '../services/api.js';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError('Failed to load movies..');
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);
  // Dummy data
  // const movies = [
  //   { id: 1, title: 'Johnwick', release_date: '2020' },
  //   { id: 2, title: 'Vemom', release_date: '2020' },
  //   { id: 3, title: 'Johnwick2', release_date: '2020' },
  // ];

  // our handler of onsumbit of our form
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery('');
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
