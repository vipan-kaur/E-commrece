import React from 'react'
  const About = () => {
  const handleDiscover = () => {
    const el = document.getElementById('discover');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div className='min-h-screen mt-16 flex flex-col gap-3 p-3 md:flex-row bg-black w-full '>
      <div className=' w-full md:w-1/2 flex flex-col h-screen border rounded-xl bg-gradient-to-b from-red-500 to-orange-600 '>
         <h1 className="text-6xl m-10 text-white animate-[fadeInUp_2s_ease-out_forwards]">
                    About
          </h1>


      <div className='flex flex-col text-white  mt-auto mb-8 p-10 pr-[50px] text-base'>
        <p className='animate-[fadeInUp_5s_ease-out_forwards]'>
        At D. Mitra, we are a dynamic online electronics store offering a wide range of consumer electronics, from cutting-edge smart TVs to innovative kitchen gadgets and personal devices. Our curated collections are meticulously selected to reflect industry trends and innovations, ensuring our customers have access to the latest and most advanced technology. With our standout project,
        </p>
        <button onClick={handleDiscover} className='p-3 px-6 mt-6 w-fit rounded-full bg-white text-black  animate-[fadeInUp_3s_ease-out_forwards]'>Discover More</button>
      </div>                        
        </div>


        <div className="w-full  md:w-1/2 h-screen ">
            <img className=' w-full rounded-xl h-full object-cover' src="https://static.wixstatic.com/media/11062b_3dba0bae48394aa1a409b48220af1edf~mv2.png/v1/fill/w_1053,h_1294,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_3dba0bae48394aa1a409b48220af1edf~mv2.png"></img>
        </div>
    </div>
    </>
  )
}

export default About