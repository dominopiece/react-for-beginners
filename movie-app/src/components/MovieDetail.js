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
    </div>
  );
}

export default MovieDetail;
