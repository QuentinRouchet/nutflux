import axios from 'axios';
import React, { useEffect, useState } from 'react';

import requests from '../Requests';

function Main() {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.fetchNetflixOriginals).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log(movie);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

    // Ckeck the length of the release date and display only the year
    // var movieDate = movie?.first_air_date;
    // if (movieDate.length > 4) {
    //     var movieDate = movieDate.substring(0, 4);
    // } 

    return (
        <div className='w-full h-[550px] text-white md:h-[750px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-t from-black md:h-[750px]'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-7xl font-black'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className='my-4'>
                        <button className='rounded border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                            Play
                        </button>
                        <button className='rounded border text-white border-gray-300 py-2 px-5 ml-4'>
                            Watch Later
                        </button>
                    </div>
                    <p className='text-gray-400 font-bold text-sm'>
                       {movie?.first_air_date}
                    </p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;