import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const signin = () => {

    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name,setname]=useState("");
    const root=import.meta.env.VITE_root_url;
    const handler1 = (e) => {
        setemail(e.target.value);
    };
    const handler2 = (e) => {
        setpassword(e.target.value);
    };
    const handler4=(e)=>{
        setname(e.target.value);
    }

    const handler3 = async () => {
        console.log("hey");
        const res = await fetch(`${root}/api/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });
        
        const result=await res.json();
        if(result.status==400)
            alert(result.message);
        alert(result.message);
        
        if(result.token)
        {    
            localStorage.setItem("authtoken", result.token);
            localStorage.setItem("email", email);
            localStorage.setItem("name",name);
            navigate(result.redirect, { replace: true });
        }
    }


    return (
         <div className='bg-gray-200 p-3 text-center w-1/2 m-auto rounded-md my-3'>
             <div className='font-bold text-black mx-auto w-fit'>WELCOME TO THE SIGNIN PAGE</div>
            <div className='m-6 text-left flex max-sm:flex-wrap'>
                <label htmlFor='name ' className='mr-4 text-black font-bold' >Name:</label>
                <input type='text' name='name' id='name' className='rounded-md max-sm:w-[7rem] bg-white' onChange={handler4}></input>
            </div>
            <div className='m-6 text-left w-fit flex max-sm:flex-wrap'>
                <label htmlFor='email' className='mr-4 text-black font-bold'>Email:</label>
                <input type='email' name='email' id='email' className='rounded-md max-sm:w-[7rem] bg-white' onChange={handler1}></input>
            </div>
            <div className='m-6 text-left flex max-sm:flex-wrap'>
                <label htmlFor='password ' className='mr-4 text-black font-bold' >Password:</label>
                <input type='password' name='password' id='password' className='rounded-md max-sm:w-[7rem] bg-white' onChange={handler2}></input>
            </div>
            
            <button className='text-white bg-blue-950 p-2 m-4 rounded-md' onClick={handler3}>login</button>
        </div>
    )
}

export default signin;
