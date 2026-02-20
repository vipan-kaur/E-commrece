import React from 'react'

const Approach = () => {
  return (
     <>
    <div className='min-h-screen flex flex-col gap-3 p-3 md:flex-row bg-black w-full '>
      


        <div className="w-full  md:w-1/2 h-screen ">
            <img className=' w-full rounded-xl h-full object-cover' src="https://cdn.pixabay.com/photo/2023/05/31/06/53/ai-generated-8030641_960_720.jpg"></img>
        </div>

        <div className=' w-full md:w-1/2 flex flex-col h-screen p-10 pr-[250px] border rounded-xl bg-gradient-to-l from-red-800 to-orange-600 '>
                         <h1 className='text-4xl  text-white'>User-Centric Approach</h1> 
      <div className='flex flex-col text-white mt-10 text-base'>
        <p className='text-lg'>
       Embracing a user-centric approach, we go beyond just selling products. Our informative blog posts serve to educate our customers about new technologies and the best use cases, empowering them to make informed decisions.
        </p>
        
      </div>                        
        </div>
    </div>
    </>
  )
}

export default Approach