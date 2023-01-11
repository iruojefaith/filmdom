import React,{ useState, useEffect } from 'react';
import {BiShowAlt} from 'react-icons/bi';
import {AiFillHeart} from 'react-icons/ai';
import {BsFillStarFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Singlemovie from './singlemovie';

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
    <li className="grid grid-cols-2 md:grid-cols-5 gap-4">
    {popularMovies.map((item, index)=>{
      return(
        <div className="card " key={index}>
          <img src={`${IMAGE_URL}${item.backdrop_path}`} />


        <div className="card_content">
          <h2 className="card_title cursor-pointer "><Link to={`./singlemovie`}> {item.title} </Link></h2>
          <div className='card_content_small'>
          <p className="card_text flex place-items-center">
          {item.release_date}  <BiShowAlt /> <AiFillHeart/>  <p className=" flex place-items-center gap-2" ><BsFillStarFill />  {item.vote_average}</p></p>
          </div>
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