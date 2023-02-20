function MovieDetail({
  id,
  coverImg,
  title,
  rating,
  year,
  summary,
  genres,
  url,
  runtime,
}) {
  return (
    <div>
      <img src={coverImg} alt="movieImg" />
      <h3>
        Title: {title}
      </h3>
      <h4>runtime: {runtime}</h4>
      <ul>
        {genres.map((genre) => (
            <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
