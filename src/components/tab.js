import React,{ useState, useEffect } from 'react';
import {BiShowAlt} from 'react-icons/bi';
import {AiFillHeart} from 'react-icons/ai';
import {BsFillStarFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import {GiSmallFire} from 'react-icons/gi'

    const MOVIE_DB_API = '60d8e93915fd577e8623e3b9820322c3';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';


    export const Trending = () => {
      const PATH = "/movie/popular?";
      const URL = `${BASE_URL}${PATH}api_key=${MOVIE_DB_API}`;
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
      <div className='mx-[0] md:mx-[3rem] '>
  <ul className="cards ">
    <li className="grid grid-cols-2 md:grid-cols-5 gap-[2rem]">
    {popularMovies.map((item, index)=>{
      return(
        <div className="card " key={index}>
          <img src={`${IMAGE_URL}${item.backdrop_path}`} />
        <div className="card_content ">
          <h2 className="card_title cursor-pointer "><Link to={`./singlemovie`}> {item.title} </Link></h2>
          <div className='card_content_small '>
          <p className="card_text flex place-items-center my-[1rem] gap-[.2rem] md:gap-[1rem]">
          {item.release_date}  <BiShowAlt /> <AiFillHeart/>  <p className=" flex place-items-center gap-2 text-[#f5b921]" ><BsFillStarFill />  {item.vote_average}</p></p>
          </div>
          </div>
      </div>
      )})}
    </li>
    </ul>
    </div>
    )}

    export  const Toprated = () => {
    const PATH = "/movie/top_rated?";
   const URL = `${BASE_URL}${PATH}api_key=${MOVIE_DB_API}`;
    const [topratedMovies, settopratedMovies] = useState([]);
    const getTopratedMovies = async() => {
        const response = await fetch(URL)
        const data = await response.json()
        settopratedMovies(data.results);
        console.log(topratedMovies);
    }
    useEffect(()=>{getTopratedMovies()}, []);
    return(
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


  export const Upcoming = () => {
  const PATH = "/movie/upcoming?";
   const URL = `${BASE_URL}${PATH}api_key=${MOVIE_DB_API}`;

   const [upcomingMovies, setupcomingMovies] = useState([]);

   const getUpcomingMovies = async() => {
      const response = await fetch(URL)
      const data = await response.json()
      setupcomingMovies(data.results)
      console.log(upcomingMovies);
}
useEffect(()=>{getUpcomingMovies()}, []);
  return (
     <div className='mx-[0] md:mx-[3rem] '>
                      <ul className="cards">
                      <li className="grid grid-cols-2 md:grid-cols-5 gap-[2rem] ">
                      {upcomingMovies.map((item, index)=>{
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



const Tab = () => {
   const tabStatus = ["Top Rated","Trending","Popular", "Upcoming"];
    const [ openTab, setOpenTab ] = useState(1);
  return (
    <div className='flex justify-center align-center '>
      <div className='w-full '>
        <div className='flex justify-center align-center mt-3'>
          <ul className='flex mb-0 list-none pt-3 pb-4 flex-row cursor-pointer ' role='tablist'>
            {tabStatus.map((item, i) => {
              return (
                <li className=' text-center'>
                  <a
                    className={
                      "text-xs md:text-xl font-normal px-[1rem] md:px-[6rem] py-3 shadow-lg  block leading-normal " +
                      (openTab === i
                        ? "text-white font-bold md:text-3xl " +
                          "800 "
                        : "text-[#f5b921] " + "-600 ")
                    }
                    key={i}
                    onClick={() => setOpenTab(i)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
 <hr className='text-white  mx-6 mb-[5rem]'></hr>
        <div className='relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded'>
          <div className='px-4 py-5 flex-auto'>
            <div className='tab-content tab-space'>
              <div className=''>
                {openTab === 0 ? (
                  <Toprated />
                ) : openTab === 1 ? (
                  <Trending />
                ) : (
                  <Upcoming />
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab;