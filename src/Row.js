import { React, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "./axios";

import "./Row.css";

function Row ({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    // Start slide button


    
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft +500;
    }

    // End slide button

    return (
        <div className="row">
            <div className="row__header">
                <h2 className="categoryTitle">{title}</h2>
            </div>
           
           <div className="contentRow">
                <MdChevronLeft size={80} onClick={slideLeft} />
                <div id="slider" className="row__posters">
                    {movies.map(movie => (
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name} />
                    ))}
                </div>
                <MdChevronRight size={80} onClick={slideRight} />
           </div>
            

        </div>
    )
}

export default Row;