import React,{ useEffect, useState } from 'react';
import {BiShowAlt} from 'react-icons/bi';
import {AiFillHeart} from 'react-icons/ai';
import {BsFillStarFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Toprated () {

    const MOVIE_DB_API = '60d8e93915fd577e8623e3b9820322c3';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const PATH = "/movie/top_rated?";
    const URL = `${BASE_URL}${PATH}api_key=${MOVIE_DB_API}`;
    const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

    const [topratedMovies, settopratedMovies] = useState([]);

    const getTopratedMovies = async() => {
        const response = await fetch(URL)
        const data = await response.json()
        settopratedMovies(data.results);
        console.log(topratedMovies);
    }

    useEffect(()=>{getTopratedMovies()}, []);

  return (
    <div className='mx-[0] md:mx-[3rem] '>
     <ul className="cards">
     <li className="grid grid-cols-2 md:grid-cols-5 gap-[2rem] ">
    {topratedMovies.map((item, index)=>{
      return(
        <div className="card " key={index}>

          <img src={`${IMAGE_URL}${item.backdrop_path}`} />


        <div className="card_content">
        <h2 className="card_title">{item.title}</h2>
          <div className='card_content_small '>
          <p className="card_text flex place-items-center my-[1rem] gap-[.6rem] md:gap-[1rem]">
          {item.release_date}  <BiShowAlt /> <AiFillHeart/>  <p className=" flex place-items-center gap-1 text-[#f5b921]" ><BsFillStarFill />  {item.vote_average}</p></p>
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

export default Toprated;