import React, { useRef, useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';


import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import {  Autoplay } from "swiper";


function Header() {
     const MOVIE_DB_API = '60d8e93915fd577e8623e3b9820322c3';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const PATH = "/movie/now_playing?";
    const URL = `${BASE_URL}${PATH}api_key=${MOVIE_DB_API}`;
    const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

    const [headerMovies, setheaderMovies] = useState([]);

    const getheaderMovies = async() => {
        const response = await fetch(URL)
        const data = await response.json()
        setheaderMovies(data.results);
        console.log(headerMovies);}

        useEffect(()=>{getheaderMovies()},[]);

  return (
   <>
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[ Autoplay]}
        autoplay={{ delay: 9000, disableOnInteraction: true }}
      >
        {headerMovies.map((item , index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img src={`${IMAGE_URL}${item.backdrop_path}`} />
                <div className='relative bottom-52 flex items-center cat2-bg-grad gap-4 px-8 w-[90%] sm:w-[50%] justify-center md:mx-0 md:ml-auto mx-auto'>

                  <p className='text-base text-center capitalize font-medium my-2 text-white py-6'>
                   text
                  </p>

                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  )
}

export default Header;





