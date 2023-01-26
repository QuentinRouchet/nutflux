import React from 'react';
import SavedShows from '../components/SavedShows';

import "../index.css";

function Account() {


  return (
    <>
      <div className='w-full text-white'>
        <div className='absolute w-full h-[550px] bg-gradient-to-t from-black md:h-[750px]'></div>
        <img className='w-full object-cover h-[550px] md:h-[750px]' src="http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px] md:h-[750px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            My Watchlist
          </h1>
        </div>
      </div> 
      <SavedShows />
    </>
  )
}

export default Account;