import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {user, logIn} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch(error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className='w-full h-full'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg" alt="cover image" />
      <div className='background_login_screen bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            {error ? <p className='mt-3 p-3 bg-red-600'>{error}</p> : null}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
              <div className='flex justify-between items-center text-sm text-gray-400'>
                <p>
                  <input className='mr-2' type="checkbox" />
                  Remember me
                </p>
                <p>
                  Need Help ?
                </p>
              </div>
              <p className='py-8'>
                <span className='text-gray-400'>New to Nutflux ? </span> 
                <span className='text-white hover:underline cursor-pointer'>
                  <Link to="/signup">
                    Sign Up
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;