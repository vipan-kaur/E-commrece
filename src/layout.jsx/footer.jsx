import React from 'react'

const Footer = () => {
  return (
    <>
 <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-around gap-10 my-20 px-6'>

    <div>
        <h1 className='text-3xl md:text-4xl font-bold'>D.Mitra</h1>
    </div>

    <div>
        <ul className='space-y-2'>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>

    <div>
        <ul className='space-y-2'>
            <li>Privacy Policy</li>
            <li>Accessibility Statement</li>
            <li>Shipping Policy</li>
            <li>Terms and Conditions</li>
            <li>Refund Policy</li>
        </ul>
    </div>

    <div className='flex flex-col gap-6'>
        <div>
            <h3>1234567890</h3>
            <h3>abc@gmail.com</h3>
        </div>

        <div>
            <h3>500 Terry Francine St.</h3>
            <h3>San Francisco, CA 94158</h3>
        </div>

        <div className='flex gap-4 text-lg'>
            <span><i className="fa-brands fa-instagram"></i></span>
            <span><i className="fa-brands fa-facebook"></i></span>
            <span><i className="fa-brands fa-linkedin"></i></span>
            <span><i className="fa-brands fa-tiktok"></i></span>
        </div>
    </div>

</div>
    </>
  )
}

export default Footer