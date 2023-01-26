import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
// import { useScrollPosition } from '../hooks/useScrollPosition';

import "../index.css";

function Navbar() {
    let logo = require("../img/logo_nutflux.svg");

    // const scrollPosition = useScrollPosition();
    // console.log(scrollPosition);
    // className='navbarScroll';

    const {user, logOut} = UserAuth();
    const navigate = useNavigate
    // console.log(user.email);

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    };


    return (
        <div className='navbar flex items-center justify-between p-4 z-[100] w-full fixed top-0'>
            <Link to='/'>
                <img src={logo.default} className="nav__logo cursor-pointer" alt='App logo'/>
            </Link>
            {user?.email ? (
                <div>
                <Link to='/account'>
                    <button className='text-white px-6 py-2 mr-2'>
                        Watchlist
                    </button>
                </Link>
                <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                    Logout
                </button>
            </div>
            ) : (
                <div>
                <Link to='/login'>
                    <button className='text-white px-6 py-2 mr-2'>
                        Sign In
                    </button>
                </Link>
                <Link to='/signup'>
                    <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                        Sign Up
                    </button>
                </Link>
            </div>
            )}
        </div>
    )
}

export default Navbar;

            // <div>
            //     <Link to='/login'>
            //         <button className='text-white px-6 py-2 mr-2'>
            //             Sign In
            //         </button>
            //     </Link>
            //     <Link to='/signup'>
            //         <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
            //             Sign Up
            //         </button>
            //     </Link>
            // </div>