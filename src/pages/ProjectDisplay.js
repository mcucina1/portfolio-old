function ProjectDisplay({name, alt, image, description, link}) {

  return (
    <div className='flex justify-start sm:justify-center md:justify-center lg:justify-center'>
        <div className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] relative bg-white rounded-md border-2 border-gray-100 border-opacity-60 mt-2 mb-6 max-w-[600px] h-[500px] xl:h-[600px]'>
            <img 
                src={image}
                alt={alt}
                className='object-fill w-full xl:h-[24rem] lg:h-72 h-80 rounded-t-md cursor-pointer'
            />
            <footer className='py-4 px-6 flex flex-col flex-wrap'>
                <h5 className='mb-3 text-2xl font-bold leading-8 tracking-tight'>{name}</h5>
                <p>{description}</p>
                <a href={link} target='_blank' rel='noreferrer' className='underline absolute bottom-4'>github</a>
            </footer>
        </div>
    </div>
  )
}

export default ProjectDisplay

/*
shadow-[5px_5px_0px_0px_rgba(109,40,217)]
*/