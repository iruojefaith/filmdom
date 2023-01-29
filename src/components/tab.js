import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import { GiSmallFire } from "react-icons/gi";
import Search from "./Search";
import { useGlobalContext } from "../context";

const Tab = () => {
  const { callAlert } = useGlobalContext();
  const tabStatus = [
    { title: "Top Rated " , path: "top_rated" , icon: <GiSmallFire />},
    { title: "Now Playing", path: "now_playing" },
    { title: "Popular", path: "popular" },
    { title: "Upcoming", path: "upcoming" },
  ];
  const [openTab, setOpenTab] = useState(1);

  const MOVIE_DB_API = "60d8e93915fd577e8623e3b9820322c3";
  const BASE_URL = "https://api.themoviedb.org/3";

  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  const getMovies = async () => {
    setLoading(true);
    const PATH = tabStatus[openTab].path;
    const URL = `${BASE_URL}/movie/${PATH}?api_key=${MOVIE_DB_API}`;
    const response = await fetch(URL);
    const data = await response.json();
    setAllMovies(data.results);
    setLoading(false);
    setDisplayedMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, [openTab]);

  const tabController = (i) => {
    setOpenTab(i);
    callAlert();
  };


  return (
    <div className='flex justify-center align-center '>
      <div className='w-full '>
        <div className='max-w-2xl mx-auto'>
          <Search handleChange={handleChange} />
        </div>
        <div className='flex justify-center align-center mt-3'>
          <ul
            className='flex mb-0 list-none pt-3 pb-4 flex-row cursor-pointer '
            role='tablist'
          >
            {this.state.tabStatus.map((item, i) => {
              return (
                <li className=' text-center'>
                  <div
                    className={
                      "text-xs md:text-xl font-normal px-[1rem] md:px-[6rem] py-3 shadow-lg  block leading-normal " +
                      (openTab === i
                        ? "text-white font-bold md:text-3xl " + "800 "
                        : "text-[#f5b921] " + "-600 ")
                    }
                    key={i}
                    onClick={() => tabController(i)}
                  >
                    {item.title}{item.icon}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className='text-white  mx-6 mb-[5rem]' />

        <div className='relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded'>
          <div className='px-4 py-5 flex-auto'>
            <div className='tab-content tab-space'>
              <div className=''>
                <Trending loading={loading} displayedMovies={displayedMovies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
