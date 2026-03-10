import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Test = () => {
    const[data,setdata]=useState([])
     useEffect(()=>{
       const getall=async()=>{
        const response=await fetch("http://localhost:1208/api/getall")
        const result =await response.json()
        setdata (result.user)
        console.log((result.user))
                          }
                 getall() },[])
      
  return (
   <div className="mt-20 ml-20 ">
  <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">All Users</h1>

  <div className="flex flex-col items-center gap-6">
    {data.map((user) => (
      <div
        key={user._id}
        className="w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-200"
      >
        <h3 className="text-xl  mb-2">
          User Name: <span className='font-semibold'> {user.name}</span>
         </h3>
     <Link to={`/getbyid/${user._id}`}> see in detail </Link>
      </div>
    ))}
  </div>
</div>
  )
}

export default Test