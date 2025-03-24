import { useState } from "react";
import React from 'react';


const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler =(e)=>{
      e.preventDefault()
      // console.log( email ,password);
      handleLogin(email,password)
      setEmail('')
      setPassword('')
  }
  return (

    <div className='flex items-center h-screen w-screen justify-center '>
      <div className='border-2 border-emerald-400 rounded-xl p-15'>
        <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
         className='flex flex-col items-center justify-center' action="">
          <input required className='border-2 placeholder:text-gray-400 text-white outline-none border-emerald-600 rounded-full py-2 px-3 mt-4'
           type="email" 
           value={email}
           onChange={(e)=>{
                setEmail(e.target.value)
           }} 
           placeholder='Enter your email' />
          <input required className='border-2 placeholder:text-gray-400 text-white outline-none border-emerald-600 rounded-full py-2 px-3 mt-2'
           type="password" 
           value={password}
           onChange={(e)=>{
                setPassword(e.target.value)
           }} 
           placeholder='Enter your password' />
          <button className='border-none placeholder:text-pink text-white outline-none bg-emerald-600 rounded-full py-2 px-4 m-3'>Log In </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
