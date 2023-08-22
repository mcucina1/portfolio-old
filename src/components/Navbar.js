import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setExpandNavbar(false)
        window.scrollTo(0,0)
    },[location])

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
        <div className='links hiddenLinks'>
            <Link to={'/portfolio'}> Home </Link>
            <Link to={'/about'}> About </Link>
            <Link to={'/projects'}> Projects </Link>
            <Link to={'/skills'}> Skills </Link>
            <Link to={'/experience'}> Experience </Link>
            <Link to={'/contact'}> Contact </Link>
        </div>
        <div className='toggleButton'>
            <button onClick={() => setExpandNavbar((prev) => !prev)}> 
                <GiHamburgerMenu/> 
            </button>
        </div>
    </div>
  )
}

export default Navbar