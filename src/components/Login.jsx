import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png" alt="logo" />
      </div>

      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input
          type="text"
          placeholder='Email Address'
          className='p-3 my-3 w-full' />
        <input
          type="password"
          placeholder='Password'
          className='p-3 my-3 w-full' />
        <button className='p-2 my-4 bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4' onClick={toggleSignInForm}>New to Netflix? Sign up Now</p>

      </form>
    </div>
  )
}

export default Login;