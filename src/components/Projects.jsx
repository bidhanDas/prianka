import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>education</h2>

            <div className='my-8 px-8 max-w-5xl mx-auto grid md:grid-cols-2 gap-8'> {/* sudhu grid dile akta column */}
              <Link href={"https://mbstu.ac.bd/"}>
                <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                <img src="/pro1.jpg" alt="" className='rounded-md duration-200 hover:scale-110'/>
                <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>BSc. in Statistics from Mawlana Bhashani Science & Technology University</h2>
                </div>
              </Link>

              <Link href={"https://kgc.ac.bd/"}>
                <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                <img src="/pro2.jpg" alt="" className='rounded-md duration-200 hover:scale-110'/>
                <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>HSC in Science from KUMUDINI GOVT. COLLEGE, TANGAIL</h2> 
                </div>
              </Link>

              <Link href={"https://deb114681.dhakaeducationboard.gov.bd/"}>
                <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                <img src="/pro3.jpg" alt="" className='rounded-md duration-200 hover:scale-110'/>
                <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>SSC in Science from BINDU BASINI GOVT. GIRLS' HIGH SCHOOL</h2>
                </div>
              </Link>

            </div>


        </div>
    </div>
  )
}

export default Projects