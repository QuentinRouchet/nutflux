import { React, useState, useEffect } from "react";

import "./Row.css";

function Row ({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

    });
    
    return (
        <div className="row">
            <h2>{title}</h2>
        </div>
    )
}

export default Row;