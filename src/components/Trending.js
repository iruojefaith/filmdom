import React,{ useState, useEffect } from 'react'

function Trending() {

const MOVIE_DB_API = '60d8e93915fd577e8623e3b9820322c3';
const BASE_URL = 'https://api.themoviedb.org/3';
const PATH = "/movie/popular?";
const URL = `${BASE_URL}${PATH}api_key=${MOVIE_DB_API}`;
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';


const [popularMovies, setpopularMovies] = useState([]);

const getPopularMovies = async() => {
      const response = await fetch(URL)
      const data = await response.json()
      setpopularMovies(data.results)
      console.log(popularMovies);
}



useEffect(()=>{getPopularMovies()},[])
console.log(popularMovies);
  return (
     <div>
  <ul className="cards">
    <li className="">
    {popularMovies.map((item, index)=>{
      return(
        <div className="card " key={index}>
        <div className="card_image">
          <img src={`${IMAGE_URL}${item.backdrop_path}`} />

          </div>
        <div className="card_content">
          <h2 className="card_title">{item.title}</h2>
          <p className="card_text">{item.original_language}</p>
          <p >{item.release_date}</p>
          <button className="btn card_btn">Show details</button>
        </div>
      </div>
      )
    } )}

    </li>
    </ul>
    </div>
  )
}

export default Trending