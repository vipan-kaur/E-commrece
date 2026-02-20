import React from 'react'
import homevideo from "../assets/homevideo.mp4"
import Homeabout from './linktoabout'
import Navmenu from './navmenu'
const Home = () => {
  return (
    <>
     <div className='h-screen relative'>
    
      <video
        src={homevideo}
        autoPlay
        muted
        loop
        playsInline
        className='absolute h-full w-full object-cover'
      ></video>

  
  {/* <div className='relative z-10 flex items-center justify-center h-full text-center text-white px-4'>
    <div>
      <h1 className='text-4xl md:text-6xl font-bold'>
        Smart Living Hub
      </h1>
      <p className='mt-4 max-w-2xl mx-auto text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et consequatur dolore, deleniti quam voluptatibus soluta aliquam expedita temporibus consequuntur quisquam tempore cupiditate! Voluptas aliquam facilis nemo tempore veritatis. Blanditiis!
      </p>
    </div>
  </div> */}
</div>
      <Homeabout/>
    </>
  )
}

export default Home