import React from 'react'

function Skills() {
  return (
    <div className='animate-fade divide-y-2 divide-gray-100'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl ml-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Skills  
        </h1>
      </div>
      <div>
        <div className='m-4'>
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>Frontend</h3>
          <span>React, Javascript, HTML5, CSS, TailwindCSS, Typescript</span>

          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>Backend</h3>
          <span>Java, Node.js, Express, Python</span>

          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>Databases</h3>
          <span>MySQL, MongoDB</span>

          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>DevOps</h3>
          <span>CI/CD, Docker, git</span>

          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>University Courses</h3>
          <span>Java/C/C++, Computer Architecture, Operating Systems, Computer Networks,
            Software Engineering, Software Testing, Machine Learning/AI, Databases, Big Data, OOP
          </span>
        </div>
      </div>
    </div>
  )
}

export default Skills