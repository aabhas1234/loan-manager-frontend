import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Signin from './signin'
import Signup from './signup'
const Authentication = () => {

    const navigate= useNavigate();
    const handler1=()=>{
        navigate('/signin');
    }

    const handler2=()=>{
        navigate('/signup');
    }

   
    return (
        <div className='h-96 w-fit p-4 m-4 bg-gray-200  border-black rounded-md border-2 flex flex-col justify-center items-center mx-auto '>
        <div className='font-bold text-black  w-fit'>WELCOME TO AABHAS'S Loan Entries Manager App, Already a registered user then signin else signup required !!</div>
        <div className='flex gap-2 my-auto'>
            <button className='p-1.5 bg-blue-950 hover:scale-105 text-white rounded-md'  onClick={handler1}>Signin</button>
            <button className='p-1.5 bg-blue-950 hover:scale-105 text-white rounded-md' onClick={handler2}>Signup</button>  
        </div>

        </div>
    )
}

export default Authentication;
