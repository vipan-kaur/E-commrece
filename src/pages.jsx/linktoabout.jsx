import React from 'react'

const Homeabout = () => {
  return (
     <>
    <div className='min-h-screen flex flex-col gap-3 p-3 md:flex-row bg-black w-full '>
         <div className="w-full  md:w-1/2 h-screen ">
            <img className=' w-full rounded-xl h-full object-cover' src="https://static.wixstatic.com/media/11062b_5fa22b66807f4b5aaca5f3ec49b935bb~mv2.jpg/v1/fill/w_1053,h_1294,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_5fa22b66807f4b5aaca5f3ec49b935bb~mv2.jpg"></img>
        </div>
      <div className=' w-full md:w-1/2 flex flex-col h-screen border rounded-xl bg-gradient-to-b from-red-500 to-orange-600 '>
                         <h1 className='text-6xl m-10 text-white'>Learn More</h1> 
      <div className='flex flex-col text-white  mt-auto mb-8 p-10 pr-[50px] text-base'>
        <p className=''>
       D. Mitra is your go-to online electronics store, dedicated to providing a wide range of consumer electronics. Our focus on industry trends and innovation ensures that you have access to cutting-edge products. We believe in a user-centric approach, offering informative blog posts and live chat support for a seamless shopping experience.
        </p>
        <button className='p-3 px-6 mt-6 w-fit rounded-full bg-white text-black'>Disocver More</button>
      </div>                        
        </div>


       
    </div>
    </>
  )
}

export default Homeabout