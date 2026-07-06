import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const[data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/coderhjs2523'
    //     ).then((res)=> res.json()
    // ).then((data)=>{
    //     console.log(data);
    //     setData(data);
    // })
    // },[])
  return (
    <div className='bg-gray-700 text-amber-50 text-2xl text-center p-5 pb-10.5 flex flex-col items-center justify-center gap-5'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="image" className='rounded-2xl w-2xs shadow-xl shadow-amber-100'/>
    </div>
  )
}

export default Github

export const githubinfoLoader = async () => {
   const res = await fetch('https://api.github.com/users/coderhjs2523')
   return res.json();
}
