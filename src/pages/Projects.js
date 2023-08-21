import React from 'react'
import styles from "../index.css"
import { projects }  from '../assets/static/data.js'
import ProjectDisplay from './ProjectDisplay'

function Projects() {

  return (
    <div className='animate-fade divide-y-2 divide-gray-100 w-full'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl ml-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>Projects</h1>
      </div>
      <div className='grid gap-x-4 lg:grid-cols-2 px-10 py-12 grid-cols-1 xl:grid-cols-2'>
        {projects.map(project => {
          return (
          <ProjectDisplay
            name={project.name}
            image={project.img}
            alt={project.alt}
            description={project.description}
            link={project.link}
          />
          )
        })}
      </div>
   </div>
  )
}

export default Projects