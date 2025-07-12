import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div className='bg-gradient-to-br from-pink-800 to-white/90 min-h-screen flex items-center justify-center flex-col gap-5'>
        <h1 className='text-3xl font-semibold hover:text-blue-900'>"For Amazing Setup"</h1>
        <Navbar/>
        </div>
    )
}

export default Home
