import React from "react";
import { useState, useEffect } from "react"
import "./Nav.css";

function Nav() {
    // Declare logo app 
    let logo = require("./img/logo_nutflux.svg");

    const [show, handleShow] = useState(false);
    
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img src={logo.default} className="nav__logo"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className="nav__avatar"/>
            </div>
        </div>
    )
}

export default Nav;