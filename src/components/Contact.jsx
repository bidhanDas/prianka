import Link from 'next/link'
import React from 'react'

import {FaBars, FaTimes, FaFacebook, FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">contact</h2>

        <div className="my-8 px-8">
        <Link href={"https://www.facebook.com/prianka.deb.5"}>
        <div className='flex items-center justify-center rounded-full shadow-md shadow-blue-400 p-3 cursor-pointer'>
          <FaFacebook size={25}></FaFacebook>
          <span className='ml-2'>click me</span>
        </div> 
        </Link>

        <div className='flex items-center p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
            <h3 className='font-light'>Email: 264cat@gmail.com</h3>
        </div> 

        </div>

      </div>
    </div>
  )
}

export default Contact