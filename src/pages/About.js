import React from 'react'
import '../styles/About.css'
import pic from '../assets/images/me_in_Japan.jpg'

function About() {
  return (
    <div className='animate-fade divide-y-2 divide-gray-100'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl ml-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          About
          </h1>
      </div>
      <section className='flex justify-center items-center flex-col grid lg:grid-cols-2'>
        <div className='flex flex-col items-center space-x-2 pt-8'>
          <div className='w-64 h-64 mt-8 rounded-full overflow-hidden'>
          <img src={pic} alt='me' className='bg-[length:200px]'/>
          </div>
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>Michael Cucina</h3>
          <div className='font-medium text-gray-500 dark:text-gray-400'>Programmer</div>
          <div className='text-gray-500 dark:text-gray-400'>Colorado State University</div>
        </div>
        <div className='bio mt-12'>
          <p className='mb-4'> Hello, my name is Michael. I'm a student at Colorado State University, an aspiring computer scientist, and a USAF veteran.</p>
          <p className='mb-4'>I've traveled all over while in the Air Force, and have had the fortune to meet many people from all walks of life, made some great memories, and met some lifelong friends. The experience I gained while in is something invaluable.</p>
          <p className='mb-4'>Feel free to contact me, I look forward to talking to you further.</p>
          <p>You can find my <span className='rounded border-2 border-solid border-[lavender]; mx-0.5 p-1 py-[0.25rem] font-medium cursor-pointer'>Resume</span> here.</p>
        </div>
      </section>
    </div>
  )
}

export default About