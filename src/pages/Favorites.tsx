import { useMovieContext } from '../context/Moviecontex';
import MovieCard from '../components/MovieCard';
const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites -mx-30">
        <h2 className="p-6 text-red-600 font-bold text-2xl">Your favorites</h2>
        <div className="movies-grid grid grid-cols-6 gap-4">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Favorites-empty">
        <h2>No Favorite movies</h2>
        <p>Favorite movies and they will be here</p>
      </div>
    );
  }
};

export default Favorites;
