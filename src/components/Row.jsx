import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


function Row({title, fetchURL, rowID}) {
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL]);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <h2 className='text-white font-bold md:text-3xl text-xl p-4 mt-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} size={40} className="bg-black opacity-50 h-[185px]  hover:opacity-80 absolute cursor-pointer z-10 hidden group-hover:block top-[-1px] left-0 text-white"/>
                <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className="bg-black h-[185px] opacity-50 hover:opacity-80 absolute cursor-pointer z-10 hidden group-hover:block right-0 top-[-1px] text-white"/>
            </div>
        </>
    )
}

export default Row;