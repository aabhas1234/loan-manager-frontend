import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const portfolio = () => {

    const navigate = useNavigate();
    const [arr, setarr] = useState([]);
    const [flag, setflag] = useState(false);
    const [final, setfinal] = useState([]);
    const [length, setlength] = useState(1);
    const [keys_final, setkeys_final] = useState([]);
    const [bucket,setbucket]=useState('');
    const [flag1, setflag1] = useState(false);
    const [final1,setfinal1]=useState([]);
    const [loantype,setloantype]=useState('');
    const [region,setregion]=useState('');
    const [isloantype, setisloantype]=useState(false);
    const [isregion, setisregion]= useState(false);
    const[isname, setisname]=useState(false);
    const[name, setname]=useState('');
    const root=import.meta.env.VITE_root_url;
    const fetchloanentries = async () => {

        const result = await fetch(`${root}/api/getloanentries?loantype=${loantype}&region=${region}&name=${name}`, {
            method: 'GET'
        })
        const res = await result.json();
        res.map((ele) => {
            delete ele._id;
            delete ele.__v;
            return ele;
        })

        setarr(res);
        //setflag1(false);
        //console.log(res);
    }
    const sortify = () => {
        console.log("arr", arr);
        let keys = Object.keys(arr[0]);
        let newarray = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < keys.length; j++) {

                newarray.push(arr[i][keys[j]]);
            }
        }
        for(let i=0;i<keys.length;i++)
        {
            if(keys[i]=='LoanNo')
                keys[i]='Loan No.';
            if(keys[i]=='Borrower')
                keys[i]='Borrower Name'
            if(keys[i]=='Loantype')
                keys[i]='Loan Type'
            if(keys[i]=='BorrowerAddress')
                keys[i]='Borrower Address'
            if(keys[i]=='SanctionAmount')
                keys[i]='Sanction Amount'
            if(keys[i]=='CurrentDpd')
                keys[i]='Current Dpd'
        }
        setflag(true);
        setlength(newarray.length);
        setkeys_final(keys);
        //console.log(newarray);
        return newarray;
    }


    const handler1 = () => {
        navigate('/addnewloanentry');
    }
    const handler3=(e)=>{
        if(e.target.value=="loantype")
            setisloantype(true);
        if(e.target.value=="region")
            setisregion(true);
        if(e.target.value=='name')
            setisname(true);
    }

    const handler4=(e)=>{
        setloantype(e.target.value);
    }
    const handler5=(e)=>{
        setregion(e.target.value);
    }

    const handler2 = (e) => {
        let tar =e?.target ? e.target.value : e;
        setbucket(tar);
        console.log(tar);
        let map = new Map();
        arr.forEach((ele) => {
           let a = map.get(ele[tar].toLowerCase()) || [];
            a.push(...Object.values(ele));
            map.set(ele[tar].toLowerCase(), a);
        });
        let newarr = [];
        for (let value of map.values()) {
            newarr.push(value);
        }
        setfinal1(newarr);
        setflag1(true);
    }

    const handler6=()=>{
        setbucket('');
        setflag1(false);
        setisloantype(false);
        setloantype('');
        setfinal1([]);
        setisregion(false);
        setisname(false);
        setregion('');
        setname('');
    }
    const handler7=(e)=>{
        setname(e.target.value);
    }

    useEffect(() => {
        fetchloanentries();
    }, [loantype,region,name])
    useEffect(() => {
        if (arr.length > 0)
            setfinal(sortify());
        if(flag1)
            handler2(bucket);
    }, [arr]);

    return (
        <div className='p-3 '>
            <div className='flex gap-2 mb-5 text-[0.75rem] bg-gray-200 p-2 rounded-md overflow-x-auto max-sm:h-[3rem] '>
                <button className='border-2 border-black rounded-md  active:scale-105 transition p-1 min-w-max' onClick={handler6}>All</button>
                <button onClick={handler1} className='border-2 border-black rounded-md text-gray-500 active:scale-105 transition p-1 min-w-max'>Create New Loan Entry</button>
                <select className='border-2 border-black rounded-md text-gray-500 active:scale-105 transition p-1 min-w-max' onChange={handler2}>
                    <option value="" disabled selected>Bucket by</option>
                    <option value="Loantype">Loan Type</option>
                    <option value="Region">Region</option>
                </select>
                <select className='border-2 border-black rounded-md text-gray-500 active:scale-105 transition p-1 min-w-max' onChange={handler3} >
                    <option value="" disabled selected> Apply filter</option>
                    <option value="loantype" >Loan Type</option>
                    <option value="region">Region</option>
                    <option value="name">Name</option>
                </select>
                {isloantype && <input type='text' className='p-1 border-1 border-black rounded-md min-w-max' placeholder='Enter Loan Type' value={loantype} onChange={handler4}></input>}
               {isregion && <input type='text' className='p-1 border-1 border-black min-w-max' placeholder='Enter Region' onChange={handler5}></input> }  
               {isname && <input type='text' className='p-1 border-1 border-black min-w-max' placeholder='Enter Name' onChange={handler7}></input> }  

            </div>
            <div className='sm:w-[63rem]'>

                {(flag1) ? <div className='overflow-x-auto justify-center'>
                    {final1.map((array) => {
                        return (<div className='inline-grid grid-cols-7 gap-4 max-sm:w-full max-sm:min-w-max overflow-x-auto border-1 border-black rounded-md my-2 p-2 divide-x divide-y'>
                            {
                                keys_final.map((ele) => (<div className='font-bold sm:min-w-max  p-1 text-center bg-blue-950 text-white rounded-md '>{ele}</div>))
                            }
                            {
                                array.map((ele) => { return <div className='text-center  p-1 '>{ele}</div> })
                            }
                        </div>)
                    })}

                </div> : <div className='overflow-x-auto justify-center'>
                    <div className='inline-grid grid-cols-7 gap-4 max-sm:min-w-max overflow-x-auto divide-x divide-y'>
                        {
                            keys_final.map((ele) => (<div className='font-bold sm:min-w-max  p-1 text-center bg-blue-950 text-white rounded-md '>{ele}</div>))
                        }
                        {
                            flag ? (final.map((ele) => { return <div className='text-center  p-1 '>{ele}</div> })) : (<div className='font-bold w-fit m-auto'>Loading</div>)
                        }
                    </div>

                </div>}



            </div>




        </div>
    )
}

export default portfolio
