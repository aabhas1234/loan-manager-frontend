import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const signup = () => {

    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name,setname]= useState("");
    const root=import.meta.env.VITE_root_url;
   
    const handler1 = (e) => {
        setemail(e.target.value);
    };
    const handler2 = (e) => {
        setpassword(e.target.value);
    };

    const handler3 = (e) => {
        setname(e.target.value);
    };

 
    const handler4 = async () => {
        console.log("heyaa");
        const res = await fetch(`${root}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name":name,
            })
        });
        console.log("ok");
        const res1 = await res.text();
        alert(res1);
        console.log(res1);
    }

    return (
        <div className='bg-gray-200 p-3 w-1/2 m-auto my-3 rounded-md text-center'>
            <div className='font-bold text-black mx-auto w-fit'>WELCOME TO THE SIGNUP PAGE</div>
            <div className='m-6 text-left'>
            <label htmlFor='name' className='mr-4 text-black'>Name:</label>
            <input type='text' name='name' id='name' className='rounded-md max-sm:w-[7rem] bg-white' onChange={handler3}></input> 
            </div>

            <div className='m-6 text-left'>
            <label htmlFor='email' className='mr-4 text-black'>Email:</label>
            <input type='email' name='email' id='email' className='rounded-md max-sm:w-[7rem] bg-white' onChange={handler1}></input>
            </div>
           
            <div className='m-6 text-left'>
            <label htmlFor='password' className='mr-4 text-black'>Password:</label>
            <input type='password' name='password' id='password' className='rounded-md max-sm:w-[7rem] bg-white' onChange={handler2}></input>
            </div>
           
            <button className='p-1.5 bg-blue-950 hover:scale-105 text-white rounded-md transition' onClick={handler4}>Signup</button>   
        </div>
    )
}

export default signup
