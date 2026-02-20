import React from 'react'

const Discover = () => {
    return (
      <>
    <div id="discover" className="min-h-screen bg-black w-full p-3 ">

  <div className="w-full p-6 py-10">
    <h1 className="text-5xl  text-white">Our Mission</h1>
  </div>

 
  <div className="flex flex-col md:flex-row gap-3 w-full">

 
    <div className="w-full md:w-1/2 flex flex-col gap-0 h-screen border rounded-xl bg-white">
      <h1 className="text-6xl m-10 mt-20 text-black animate-[fadeInUp_3s_ease-out_forwards]">Smart Appliance</h1>

      <div className=" text-black text-lg p-10 pr-50">
        <p>
          Our mission is to enhance our customers lives by providing them with smart appliances that revolutionize their everyday experiences.
        </p>
      </div>
    </div>

   
    <div className="w-full md:w-1/2 h-screen">
      <img
        className="w-full rounded-xl h-full object-cover"
        src="https://static.wixstatic.com/media/11062b_0f1e951461494c1894d86c9ab85a11cff000.jpg/v1/fill/w_842,h_690,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_0f1e951461494c1894d86c9ab85a11cff000.jpg"
        alt="About"
      />
    </div>

  </div>
</div>
</>
  )
}

export default Discover