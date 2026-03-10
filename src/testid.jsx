import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Id = () => {
    const {id}=useParams()
     const[user,setuser]=useState([])
         useEffect(()=>{
           const getall=async()=>{
            const response=await fetch(`http://localhost:1208/api/getbyid/${Id}`)
            const result =await response.json()
            setuser (result.user)
                              }
                     getall() },[])
          
  return (
    <div className="mt-20 ml-20 ">
  <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">User Data</h1>

  <div className="flex flex-col items-center gap-6">
   
      <div
        key={user.id}
        className="w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-200"
      >
        <h3 className="text-xl  mb-2">
          User Name: <span className='font-semibold'> {user.name}</span>
          
        </h3>
        <h3 className="text-gray-700 mb-1">
          Email: {user.email}
        </h3>
        <h3 className="text-gray-700 mb-1">
          Password: {user.password}
        </h3>
        <h3 className="text-gray-700">
          Phone No: {user.PhoneNo}
        </h3>
      </div>

  </div>
</div>
  )
}

export default Id