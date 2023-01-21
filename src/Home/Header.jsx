import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Header() {
  const MOVIE_DB_API = "60d8e93915fd577e8623e3b9820322c3";
  const BASE_URL = "https://api.themoviedb.org/3";
  const PATH = "/movie/now_playing?";
  const URL = `${BASE_URL}${PATH}api_key=${MOVIE_DB_API}`;
  const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

  const [headerMovies, setheaderMovies] = useState([]);

  const getheaderMovies = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setheaderMovies(data.results);
    console.log(headerMovies);
  };

  useEffect(() => {
    getheaderMovies();
  }, []); 

  return (
    <div className='p-[10px] '>
      {headerMovies.slice(0, 5).map((item) => {
        <Carousel>
          <div key={item.uid}>
            <img src={`${IMAGE_URL}${item.backdrop_path}`} />
            <p className='legend'>Legend 1</p>
          </div>
        </Carousel>;
      })}
    </div>
  );
}

export default Header;
