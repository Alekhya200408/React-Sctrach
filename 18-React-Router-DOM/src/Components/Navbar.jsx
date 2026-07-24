import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex  p-5 justify-between'>
   
        <h1>Alekhya</h1>
        <div className='flex gap-5'>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}

        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        </div>

    </div>
  )
}

export default Navbar