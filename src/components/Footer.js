import React from 'react'
import '../styles/Footer.css'
import { IconContext } from "react-icons";
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { SiMicrosoftoutlook } from 'react-icons/si'
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate(); 

  const routeChange = (path) =>{ 
    navigate(path);
  }

  return (
    <div className=' '>
      <div className='footer'>
        <div className='icons mb-2'>
      <IconContext.Provider value={{color:'#0077B5' }}>
          <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/michaelcucina/','_blank')}/>
      </IconContext.Provider>
      <IconContext.Provider value={{color:'black' }}>
          <IoLogoGithub onClick={() => window.open('https://github.com/mcucina1', '_blank')}/>
      </IconContext.Provider>
      <IconContext.Provider value={{color:'#00a2ed' }}>
          <SiMicrosoftoutlook onClick={() => routeChange('/contact')}/>
      </IconContext.Provider>
        </div>
        <p>
          &copy; 2023 Michael Cucina
        </p>
      </div>
    </div>
  )
}

export default Footer