import React from 'react'
import Sidemenu from './sidemenu';
import { useState } from 'react';
const Home = () => {

    const [count,setcount]=useState(0);
    const handler1=(c)=>{
        setcount(c);
    };
  return (
    <div className='p-5 '>
        <div className='flex space-x-3 items-center justify-between bg-gray-200 p-2 rounded-md'>
            <img src='./logo.jpg '   className='w-[5rem] h-[3rem] rounded-md'></img>
            <div className='font-bold font-serif text-[0.7rem] '>
                <div className='border-2 border-black mb-0.5 p-1 rounded-md text-centerc'>Hello {localStorage.getItem("name")}</div>
                <div className='border-2 border-black p-1 rounded-md'>{localStorage.getItem("email")}</div>
            </div>
           
        </div>
        <hr className="border-gray-400 my-4" />
        <div className='sm:flex sm:h-screen '>
            <div className='flex p-3 flex-row overflow-auto  sm:flex-col sm:w-[15rem] gap-2' >
                <button onClick={()=>(handler1(1))} className='hover:text-white max-sm:h-[3rem] font-bold  border-[0.1rem] border-gray-500 rounded-md sm:p-1 p-2 hover:bg-blue-950 active:scale-105 transition'>Dashboard</button>
                <button onClick={()=>(handler1(2))} className='hover:text-white max-sm:h-[3rem] font-bold  border-[0.1rem] border-gray-500 rounded-md sm:p-1 p-2 hover:bg-blue-950 active:scale-105 transition'>Portfolio</button>
                <button onClick={()=>(handler1(3))} className='hover:text-white max-sm:h-[3rem] font-bold  border-[0.1rem] border-gray-500 rounded-md sm:p-1 p-2 hover:bg-blue-950 active:scale-105 transition'>Notifications</button>
                <button onClick={()=>(handler1(4))} className='hover:text-white max-sm:h-[3rem] font-bold  border-[0.1rem] border-gray-500 rounded-md sm:p-1 p-2 hover:bg-blue-950 active:scale-105 transition'>Actions</button>
                <button onClick={()=>(handler1(5))} className='hover:text-white max-sm:h-[3rem] font-bold  border-[0.1rem] border-gray-500 rounded-md sm:p-1 p-2 hover:bg-blue-950 active:scale-105 transition'>Permissions</button>
                <button onClick={()=>(handler1(6))} className='hover:text-white max-sm:h-[3rem] max-sm:min-w-max font-bold  border-[0.1rem] border-gray-500 rounded-md sm:p-1 p-2 hover:bg-blue-950 active:scale-105 transition'>User Management</button>
            </div>
            {/* <div className="h-[30rem] w-[0.125rem] max-sm:hidden bg-gray-400"></div> */}
            <Sidemenu count={count}/>
        </div>
    </div>
  )
}

export default Home
