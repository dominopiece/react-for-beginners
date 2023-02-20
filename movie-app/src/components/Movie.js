import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, rating, year, summary, genres }) {
  return (
    // <div>
    //   <img src={coverImg} alt={title} />
    //   <h2>
    //     {/* Link to 사용 시 새로고침이 없음 */}
    //     <Link to={`/movie/${id}`}>{title}/</Link>
    //   </h2>
    //   <h3>
    //     rating: {rating} year:{year}
    //   </h3>
    //   <p>{summary} </p>
    //   <ul>
    //     {genres.map((genre) => (
    //       <li key={genre}>{genre}</li>
    //     ))}
    //   </ul>
    // </div>
    <div className={styles.movie}>
      <img className={styles.movie__image} src={coverImg} alt={title} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
          <p className={styles.movie__summary}>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
