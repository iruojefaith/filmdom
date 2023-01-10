import React,{ useState, useEffect } from 'react';
import {BiShowAlt} from 'react-icons/bi';
import {AiFillHeart, AiFillStar} from 'react-icons/ai';
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
          <h2 className="card_title cursor-pointer "><Link to={`./singlemovie?name=${item.name}`}> {item.title} </Link></h2>
          <div className='card_content_small'> <p className="card_text">{item.release_date}</p>
             <p><BiShowAlt /></p>
              <p><AiFillHeart/></p>
             <p className="card_text"><AiFillStar /> {item.vote_average}</p>
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