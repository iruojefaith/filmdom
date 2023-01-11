import React,{ useState } from 'react';
import Toprated from './Toprated';
import Trending from './Trending';
import {GiSmallFire} from 'react-icons/gi'

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
                  <Toprated />
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