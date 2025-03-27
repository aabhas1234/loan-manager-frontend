import React from 'react'
import { useState } from 'react';
const Addnewloanentry =() => {
    const[loanno, setloanno]=useState(0);
    const[loantype, setloantype]=useState("");
    const[borrowername, setborrowername]=useState("");
    const[borroweraddress, setborroweraddress]=useState("");
    const[sanctionamount, setsanctionamount]=useState(0);
    const[region, setregion]=useState("");
    const[currentdpd,setcurrentdpd]=useState(0);
    const handler1=(e)=>{setloanno(e.target.value)};
    const handler2=(e)=>{setloantype(e.target.value)};
    const handler3=(e)=>{setborrowername(e.target.value)};
    const handler4=(e)=>{setborroweraddress(e.target.value)};
    const handler5=(e)=>{setsanctionamount(e.target.value)};
    const handler6=(e)=>{setregion(e.target.value)};
    const handler7=(e)=>{setcurrentdpd(e.target.value)};
    const root=import.meta.env.VITE_root_url;
    const handler8=async()=>{
        if(loanno===0 || loantype==="Enter Loan type" || borrowername==="Enter borrower Name" || borroweraddress=="Enter Borrower Address" || sanctionamount==0 || region=="Enter region" || currentdpd==0 )
        {
            alert("Please Enter all the values");
            return;
        }
        const res= await fetch(`${root}/api/createloanentry`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                loanno:loanno,
                loantype:loantype,
                borrower:borrowername,
                borroweraddress:borroweraddress,
                sanctionamount:sanctionamount,
                region:region,
                currentdpd:currentdpd
            })
        });
        const result = await res.text();
        alert(result);
    }

    return (
        <div className='p-5 text-center'>

            <div className='flex space-x-3 items-center justify-between bg-gray-200 p-3 rounded-md'>
                <img src='../public/logo.jpg ' className='w-[5rem] h-[3rem] rounded-md'></img>
                <div className='font-bold font-serif text-[0.7rem] '>
                    <div className='border-2 border-black mb-0.5 p-1 rounded-md'>Hello admin_name</div>
                    <div className='border-2 border-black p-1 rounded-md'>Email of admin</div>
                </div>

            </div>
            <hr className="border-blue-950 text-white my-4" />
            <div className='font-bold text-[1.25rem] w-fit m-auto mb-3' >Enter your New Loan Entry here :</div>
            <div className='grid grid-cols-2 gap-3 w-fit m-auto '>
                
                    <label for='loanno' className='font-bold mx-2 p-1 bg-blue-950 text-white   rounded-md'  >Loan no:</label>
                    <input className='bg-gray-400 p-1  rounded-md' value={loanno} type='text' onChange={handler1} id='loanno' placeholder='Enter Loan no.'></input>
               
                    <label for='loantype' className='font-bold mx-2 p-1 bg-blue-950 text-white  rounded-md'>Loan type:</label>
                    <input className='bg-gray-400 p-1  rounded-md' value={loantype} type='text' onChange={handler2} placeholder='Enter Loan Type' id='loantype'></input>

                    <label for='borrower' className='font-bold mx-2 p-1 bg-blue-950 text-white  rounded-md'>Borrower Name:</label>
                    <input className='bg-gray-400 p-1  rounded-md' value={borrowername} type='text' onChange={handler3} placeholder='Enter Borrower Name' id='borrower'></input>


                    <label for='borroweraddress' className='font-bold mx-2 p-1 bg-blue-950 text-white  rounded-md'>Borrower Address:</label>
                    <input className='bg-gray-400 p-1  rounded-md' value={borroweraddress} type='text' onChange={handler4} placeholder='Enter Borrower Address' id='borroweraddress'></input>


                    <label for='sanctionamount' className='font-bold mx-2 p-1 bg-blue-950 text-white  rounded-md'>Sanction Amount:</label>
                    <input className='bg-gray-400 p-1  rounded-md' value={sanctionamount} type='Number' onChange={handler5} placeholder='Enter Sanction Amount' id='sanctionamount'></input>


                    <label for='region' className='font-bold mx-2 p-1 bg-blue-950 text-white  rounded-md'>Region:</label>
                    <input className='bg-gray-400 p-1  rounded-md' placeholder='Enter region' value={region} type='text' onChange={handler6} id='region'></input>

 
                    <label for='current dpd' className='font-bold mx-2 p-1 bg-blue-950 text-white  rounded-md'>Current dpd:</label>
                    <input className='bg-gray-400 p-1  rounded-md' placeholder='Enter current Dpd ' value={currentdpd} type='Number' onChange={handler7} id='region'></input>


            </div>
            <hr className="border-gray-400 my-4" />
            <button className='border-1 border-black font-bold p-1 rounded-md hover:bg-blue-950 hover:text-white active:scale-105 transition' onClick={handler8}>Save</button>
        </div>
    )
}

export default Addnewloanentry;