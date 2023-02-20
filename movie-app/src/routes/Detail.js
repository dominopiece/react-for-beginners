import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  //   console.log({ id });
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setInfo(json.data.movie);
    setLoading(false);
  };
  console.log(info);
  useEffect(() => {
    getMovie();
  }, []);
  console.log("detail.js", info.id);

  return (
    <div>
      {loading ? (
        <h1>loading.</h1>
      ) : (
        <div>
          <h1>Movie Detail</h1>
          <MovieDetail
            id={info.id}
            coverImg={info.large_cover_image}
            title={info.title_long}
            year={info.year}
            url={info.url}
            runtime={info.runtime}
            genres={info.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
