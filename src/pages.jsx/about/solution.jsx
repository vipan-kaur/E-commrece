import React from 'react'

const Solution = () => {
  return (
    <>  <div className='min-h-screen flex flex-col gap-3 p-3 md:flex-row bg-black w-full '>


        <div className="w-full  md:w-1/2 h-screen ">
            <img className=' w-full rounded-xl h-full object-cover' src="https://img.freepik.com/premium-photo/hightech-circuit-board_941097-1532.jpg"></img>
        </div>

         <div className=' w-full md:w-1/2 flex flex-col h-screen border rounded-xl bg-gradient-to-b from-blue-900 to-blue-500 '>
            <h1 className='text-6xl m-10 text-white'>
                Integrated Solutions</h1> 
      <div className='flex flex-col text-white  p-10 pr-[50px] text-base'>
        <p className=''>
        Integrated solutions, we aim to create seamless and efficient living environments that cater to the modern lifestyle. By combining innovative technologies with convenience, we ensure our customers enjoy a living experience.
        </p>
        
      </div>                        
        </div>
    </div>
    </>
  )
}

export default Solution