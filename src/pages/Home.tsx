import MovieCard from '../components/MovieCard.tsx';
import { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Our dummy data
  const movies = [
    { id: 1, title: 'John Wick', release_date: '2012' },
    { id: 2, title: 'Inception', release_date: '2010' },
    { id: 3, title: 'The Dark Knight', release_date: '2008' },
    { id: 4, title: 'Pulp Fiction', release_date: '1994' },
    { id: 5, title: 'The Matrix', release_date: '1999' },
    { id: 6, title: 'Interstellar', release_date: '2014' },
  ];

  // our handler of onsumbit of our form
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
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
