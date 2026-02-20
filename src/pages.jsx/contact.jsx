import React, { useState } from 'react'

const Contact = () => {

    const[data,setdata]=useState({
        
        firstname:"",
        lastname:"",
        phone:"",
        email:"",
        message:""
    })

    const handlesubmit = (e) => {
         e.preventDefault();

    let prevData = JSON.parse(localStorage.getItem("contactInfo")) || [];
    const updatedData = [...prevData, data];
    
    localStorage.setItem("contactInfo", JSON.stringify(updatedData));

 
  setdata({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: ""
  });

  console.log("Saved all submissions:", updatedData);
};


    const handleinput=(event)=>{
            const {name, value}=event.target
            setdata(prev=>
           ( {
                ...prev,
                [name]:value
            })
            )
    }
  return (
    <>
    <div className='flex flex-col mt-16 md:flex-row  min-h-screen justify-center items-center'>
        <div className="w-full md:w-1/2 h-screen ">
            <img className=' w-full h-full object-cover' src="https://static.vecteezy.com/system/resources/thumbnails/043/166/220/small_2x/ai-generated-woman-holding-cell-phone-free-photo.jpeg"></img>
        </div>
        <div className='w-full md:w-1/2 h-screen flex justify-center items-center'>

        <form onSubmit={handlesubmit} className='grid grid-cols-2 gap-14'>
        <div className='flex flex-col col-span-2 gap-7'>
        <h1 className='text-5xl  text-center ' >Contact Us</h1>
        <p  className=' text-center'>Reach out to us for inqueries and assistance</p>
        </div>
        <div className='flex flex-col '>
        <label htmlFor='firstname'>First name*</label>
        <input required id='firstname' value={data.firstname} onChange={handleinput} name="firstname"  type="text" className='border-b p-2 outline-none hover:border-b-0 '></input>
        </div>

        <div className='flex flex-col'>
        <label htmlFor='lastname'>Last name*</label>
        <input id='lastname' value={data.lastname} onChange={handleinput} name="lastname" type="text"  className='border-b p-2 outline-none hover:border-b-0'></input>
        </div>

        <div className='flex flex-col'>
        <label htmlFor='email'>Email*</label>
        <input required id='email' value={data.email} type="email" onChange={handleinput} name="email" className='border-b p-2 outline-none hover:border-b-0'></input>
        </div>

        <div className='flex flex-col'>
        <label htmlFor='phone'>Phone*</label>
        <input required id='phone' value={data.phone} name="phone" onChange={handleinput} className='border-b p-2 outline-none hover:border-b-0'></input>
        </div>


        <div className=' col-span-2 flex flex-col'>
        <label>Message</label>
        <textarea value={data.message} name="message" onChange={handleinput} className='border-b p-2 outline-none hover:border-b-0'></textarea>
        </div>

        <button  className='bg-black col-span-2  text-white text-lg rounded-4xl p-2 '>Submit</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Contact