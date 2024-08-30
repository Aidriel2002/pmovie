function MovieCard({ props }) {
    return (
      <div className="MovieCard">
        <div className="movie-info">
          <img src={props.Poster} alt={props.Title} className="movie-poster" />
          <div className="movie-overlay">
            <div className="additional-info">
              <p>Director: {props.Director}</p>
              <p>Genre: {props.Genre}</p>
              <p>Type: {props.Type}</p>
              <p>Year: {props.Year}</p>
              <h3>{props.Title}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MovieCard;
  