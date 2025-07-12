import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate =useNavigate()
  const hanldeSignIn=(e)=>{
    e.preventDefault()
    navigate('/login')
  }
  return (
    <div>
      <nav>
        <button 
        className='border px-6 py-4 rounded-full bg-yellow-600 border-none cursor-pointer hover:bg-blue-600 transition duration-200 text-white font-semibold'
        onClick={hanldeSignIn}>Sign In</button>
      </nav>
    </div>
  )
}

export default Navbar
