import MovieCard from '../components/MovieCard.tsx';

const Home = () => {
  const movies = [
    { id: 1, title: 'John Wick', release_date: '2012' },
    { id: 2, title: 'Inception', release_date: '2010' },
    { id: 3, title: 'The Dark Knight', release_date: '2008' },
    { id: 4, title: 'Pulp Fiction', release_date: '1994' },
    { id: 5, title: 'The Matrix', release_date: '1999' },
    { id: 6, title: 'Interstellar', release_date: '2014' },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="">
        <input type="text" placeholder="Search for movies..." className="search-input" />
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
