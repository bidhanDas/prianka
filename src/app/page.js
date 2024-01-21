import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Me from '@/components/Me'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <Projects></Projects>
      <Experience></Experience>
      <Me></Me>
      <Contact></Contact>
    </div>
  )
}

export default page