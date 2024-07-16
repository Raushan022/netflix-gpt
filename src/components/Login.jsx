import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null)

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message)

    if (message) return;

    //sign in/sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("sign up",user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage( errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("sign in",user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage( errorCode + "-" + errorMessage);
        });
    }

  }

  const toggleSignInForm = () => {
    setIsSSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png" alt="logo" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder='Full Name'
          className='p-3 my-3 w-full bg-gray-700 rounded-sm'
        />}
        <input
          ref={email}
          type="text"
          placeholder='Email Address'
          className='p-3 my-3 w-full bg-gray-700 rounded-sm'
        />
        <input
          ref={password}
          type="password"
          placeholder='Password'
          className='p-3 my-3 w-full bg-gray-700 rounded-sm'
        />

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button className='p-2 my-4 bg-red-600 w-full rounded-sm' onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up" : "Already registered? Sign In Now"}
        </p>

      </form>
    </div>
  )
}

export default Login;