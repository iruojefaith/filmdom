import React, { useState, useEffect } from "react";
import { BiShowAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Singlemovie from "./singlemovie";

export const SinglemovieContext = React.createContext()

function Trending({ displayedMovies, loading }) {
  const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
  const [singleMovie, setSingleMovie] = useState(true)
  if (loading) {
    return (
      <div className='flex items-center justify-center'>
        <h2 className='text-center text-white'>Loading...</h2>
      </div>
    );
  }
  return (
    <div className='mx-[0] md:mx-[3rem] '>
      <ul className='cards '>
        <li className='grid grid-cols-2 md:grid-cols-5 gap-[2rem]'>
          {displayedMovies?.map((item, index) => {
            return (
              <div className='card ' key={index}>
                <img src={`${IMAGE_URL}${item.backdrop_path}`} />

                <div className='card_content '>
                <SinglemovieContext.Provider>
                  <h2 className='card_title cursor-pointer '>
                    <Link to={`./singlemovie`}> {item.title} </Link>
                  </h2>
                  </SinglemovieContext.Provider>
                  <div className='card_content_small '>
                    <p className='card_text flex place-items-center my-[1rem] gap-[.2rem] md:gap-[1rem]'>
                      {item.release_date} <BiShowAlt /> <AiFillHeart />{" "}
                      <p className=' flex place-items-center gap-2 text-[#f5b921]'>
                        <BsFillStarFill /> {item.vote_average}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default Trending;
