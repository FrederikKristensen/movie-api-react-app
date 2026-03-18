import MovieCard from '../components/MovieCard.tsx';
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // We store out movies with useffect so we dont keep calling the api
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError('Failed to load movies..');
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // our handler of onsumbit of our form
  const handleSearch = async (e) => {
    e.preventDefault();
    // Removes all whitespaces to ensure it is not only spaces
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError('Failed to search movies...');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home -mx-30">
      {/* TODO style searchbar */}
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

      {/* Error message if api fails */}
      {error && <div className="error-message">{error}</div>}
      {/* Display if movies are getting loaded */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid grid grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
