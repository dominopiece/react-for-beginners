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
  torrents,
}) {
    // console.log(torrents[0].size, "torrents")
  return (
    <div>
      <img src={coverImg} alt="movieImg" />
      <h3>Title: {title}</h3>
      <h4>runtime: {runtime} minutes</h4>
      <ul>
        {genres.map((genre, id) => (
          <li key={id}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
      <h5>
        <ul>
        {torrents.map((addres) => (
            // console.log(addres, "map")
            // <li>size:{addres.size} : {addres.url} </li>
            <li key={addres.hash}>
            <a href={addres.url}>torrents - size : {addres.size}</a>
            </li>
        ))}
        </ul>
      </h5>
    </div>
  );
}

export default MovieDetail;
