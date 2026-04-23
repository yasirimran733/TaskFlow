import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function HeroSection() {
  const navigate = useNavigate()
  return (
    <>
    <div className='h-screen bg-green-500'>
      <h1>Hero Section</h1>
    <div>
    <Link to="/signup"> 
      <button>Get Started</button>
    </Link>
     <Link to="/login"> 
      <button>Login</button>
    </Link>
    </div>
    </div>
    </>
  )
}

export default HeroSection
