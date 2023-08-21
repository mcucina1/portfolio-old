import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className='animate-fade'>
    <section className='home-section'>
      <h2 className='home text-3xl font-bold dark:text-white lg:text-5xl'>Hi, I'm Michael</h2>
      <p className='font-light my-2 text-lg lg:my-4 lg:text-2xl'>Student, Programmer, Veteran</p>
      <p className='text-gray-500 dark:text-gray-400'>Check me out on <a href='https://github.com/mcucina1' rel='noreferrer' target='_blank' className='underline'>Github</a> and <a href='https://www.linkedin.com/in/michaelcucina/' target='_blank' className='underline'>LinkedIn</a></p>
    </section>
    </div>
  )
}

export default Home