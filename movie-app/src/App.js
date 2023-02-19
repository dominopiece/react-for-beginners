import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);

  // async await
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    // const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movie Rating: Top {movies.length}</h1>
      {/* <li>
        {movies.map((item) => (
          <ol key={item.id}>{item.url}</ol>
        ))}
      </li> */}
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <h3>
                {" "}
                rating: {movie.rating} year:{movie.year}{" "}
              </h3>
              <p>{movie.summary} </p>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
