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
      <form onSubmit={handleSearch} className="p-5 space-x-3">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input bg-neutral-700 p-4 rounded-xl focus-visible:outline-0 placeholder:text-neutral-400 text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="search-button p-4 bg-red-800 rounded-xl font-bold text-white"
        >
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
