import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate =useNavigate()
  const hanldeSignIn=(e)=>{
    e.preventDefault()
    navigate('/register')
  }
  return (
    <div>
      <nav>
        <button 
        className='border px-4 py-2 rounded-full bg-yellow-600 border-none cursor-pointer hover:bg-blue-600 transition duration-400 text-white font-semiboldte'
        onClick={hanldeSignIn}>Sign In</button>
      </nav>
    </div>
  )
}

export default Navbar
