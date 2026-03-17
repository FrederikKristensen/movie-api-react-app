const MovieCard = ({ movie }) => {
  // alert is placeholder
  function onFavoriteClick() {
    alert('Clicked');
  }

  // Class names are placeholder
  return (
    <div className="movie-card bg-neutral-800 text-white rounded-md">
      <div className="movie-poster">
        <img
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
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
