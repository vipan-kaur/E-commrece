import React from 'react'
import { Link } from 'react-router-dom'

const Navmenu = ({ toggleMenu }) => {
  const handleclose = () => {
    toggleMenu();
  }
  return (
   <>
   <div id="navmenu" className=' w-64 h-screen bg-black text-white z-50 flex flex-col'>
    <button onClick={handleclose} className=' flex bg-black text-white p-2 rounded-lg'>close</button>

    <div className='flex'>
    <ul className='flex flex-col gap-5 text-2xl mt-10 ml-5 hover:cursor-pointer '>
       <Link to="/aboutpage"><li  onClick={handleclose} className=' text-white hover:border border-white px-5 p-2 shadow-xl'>About</li></Link>
       <Link to="/products"><li onClick={handleclose}  className=' text-white hover:border border-white px-5 p-2 shadow-xl'>Products</li></Link>
       <Link to="/contact"><li onClick={handleclose}className=' text-white hover:border border-white px-5 p-2 shadow-xl'>Contact</li></Link>    
    </ul>
   </div>
   </div>
   </>
  )
}

export default Navmenu