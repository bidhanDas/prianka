"use client"
import Link from 'next/link'
import React, { useState } from 'react'

import {FaBars, FaTimes, FaFacebook, FaLinkedin} from 'react-icons/fa'

const Navbar = () => {

  const [navigation, setNavigation] = useState(false);

  return (
    <div id='home' className='w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in'>
      <div className='flex justify-between items-center w-full h-full mx-auto p-4 max-w-screen-2xl'>
        <Link className='' href={"#home"}>
          <h1 className='text-3xl lg:text-4xl font-bold underline underline-offset-2 tracking-wider cursor-pointer'>prianka</h1>
        </Link>

        <div>
        <ul className='hidden md:flex'>
          <li className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out tracking-wider hover:scale-105'><Link href={"#home"}>home</Link></li>
          <li className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out tracking-wider hover:scale-105'><Link href={"#projects"}>education</Link></li>
          <li className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out tracking-wider hover:scale-105'><Link href={"#experience"}>experience</Link></li>
          <li className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out tracking-wider hover:scale-105'><Link href={"#me"}>me</Link></li>
          <li className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out tracking-wider hover:scale-105'><Link href={"#contact"}>contact</Link></li>
        </ul>

        {
          !navigation && (
            <div className='md:hidden cursor-pointer' onClick={() => setNavigation(true)}>
              <FaBars size={30}></FaBars>
            </div>
          )
        }
        
        </div>

      </div>

      <div className={navigation ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur' : ''}>
      <div className={navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500' :'fixed top-0 left-[-100%] p-10 h-full ease-in duration-500'}>
        <div>
          <div className='w-full flex justify-between items-center'>
            <Link href={"#home"}><h2 className='text-3xl font-bold underline underline-offset-2 tracking-wider cursor-pointer' onClick={() => setNavigation(false)}>prianka</h2></Link>
            <div className='p-3 cursor-pointer' onClick={() => setNavigation(false)}>
              <FaTimes size={30}></FaTimes>
            </div>
          </div>
        </div>

        <div className='mt-24 flex flex-col h-fit gap-20'>
          <ul className='uppercase'>
            <li className='py-4 text-2xl tracking-wider cursor-pointer' onClick={() => setNavigation(false)}><Link href={"#home"}>home</Link></li>
            <li className='py-4 text-2xl tracking-wider cursor-pointer' onClick={() => setNavigation(false)}><Link href={"#projects"}>education</Link></li>
            <li className='py-4 text-2xl tracking-wider cursor-pointer' onClick={() => setNavigation(false)}><Link href={"#experience"}>experience</Link></li>
            <li className='py-4 text-2xl tracking-wider cursor-pointer' onClick={() => setNavigation(false)}><Link href={"#me"}>me</Link></li>
            <li className='py-4 text-2xl tracking-wider cursor-pointer' onClick={() => setNavigation(false)}><Link href={"#contact"}>contact</Link></li>
          </ul>
          <div>
            <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
              <div>
              <Link href={"https://www.facebook.com/prianka.deb.5"}>
              <div className='flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer'>
                <FaFacebook size={25}></FaFacebook>
              </div>
              </Link>
              </div>

              <div>
              <Link href={"https://www.linkedin.com"}>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <FaLinkedin size={25} />
              </div>
              </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
      </div>


    </div>
  )
}

export default Navbar