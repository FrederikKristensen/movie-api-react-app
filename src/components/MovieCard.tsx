import { useMovieContext } from "../context/Moviecontex";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  // alert is placeholder
  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }
  // className="  "

  // Class names are placeholder
  return (
    <div className="movie-card bg-neutral-800 text-white rounded-md">
      <div className="movie-poster relative group">
        <img
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn absolute top-2 right-2 opacity-0 group-hover:opacity-100  hover:bg-gray-500/40 rounded-full p-2 
              ${favorite ? 'active text-yellow-300 opacity-100' : 'hover:text-yellow-300'} `}
            onClick={onFavoriteClick}
          >
            ★
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
