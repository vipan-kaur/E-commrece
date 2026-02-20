import React from 'react'

const Automation = () => {
  return (
     <>
  <div className="min-h-screen bg-black w-full p-3 ">

  <div className="w-full p-6 py-10">
    <h1 className="text-5xl  text-white">Our Mission</h1>
  </div>

 
  <div className="flex flex-col md:flex-row gap-3 w-full">

 
    <div className="w-full md:w-1/2 flex flex-col p-10 pr-[150px]  h-screen border rounded-xl bg-white">
      <h1 className="text-5xl mt-20 text-black">Automated Lighting Systems</h1>

      <div className=" text-black mt-10 text-lg ">
        <p>
         Our automated lighting systems are designed to offer both functionality and style, transforming any space into a smart and energy-efficient environment. 
        </p>
      </div>
    </div>

   
    <div className="w-full md:w-1/2 h-screen">
      <img
        className="w-full rounded-xl h-full object-cover"
        src="https://static.wixstatic.com/media/11062b_6b01bf9f582d460eb7b78b5dab984b4f~mv2.jpg/v1/fill/w_1053,h_863,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6b01bf9f582d460eb7b78b5dab984b4f~mv2.jpg"
        alt="About"
      />
    </div>

  </div>
</div>
</>
  )
}

export default Automation