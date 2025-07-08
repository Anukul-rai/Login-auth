import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Login() {
  const [input,setInput]= useState({
    email:'',
    password:''
  })
  const navigate = useNavigate()
  const hanldeLogin =(e)=>{
    e.preventDefault()
    const loggeduser = JSON.parse(localStorage.getItem('user'))
    if (input.email === loggeduser.email && 
      input.password === loggeduser.password) {
      navigate('/dashboard')
      toast.success('Logged in sucessfully')
    }else{
      toast.error('Enter valid email or password')
    }
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black'>
      <div className='flex flex-col p-6 mt-8 bg-white/20 rounded-xl gap-4 w-full max-w-md mx-4 shadow-lg'>
        <h1 className='text-3xl font-semibold text-white text-center mb-4'>Login</h1>
        <form onSubmit={hanldeLogin} className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <input
              type='email'
              placeholder='Enter your email'
              className='px-3 py-2 rounded-lg bg-white/40 text-white placeholder-white/60 focus:outline-none w-full'
              name="email"
              value={input.email}
              onChange={(e)=>setInput({
                ...input,[e.target.name]:e.target.value
              })}
            />
            <label className='ml-1 text-xs text-gray-300 mt-1'>Your Email</label>
          </div>
          <div className='flex flex-col'>
            <input
              type='password'
              placeholder='Enter your password'
              className='px-3 py-2 rounded-lg bg-white/40 text-white placeholder-white/60 focus:outline-none w-full'
              name="password"
              value={input.password}
              onChange={(e)=>setInput({
                ...input,[e.target.name]:e.target.value
              })}
            />
            <label className='ml-1 text-xs text-gray-300 mt-1'>Password</label>
          </div>
          <button
            type='submit'
            className='bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-medium py-2 rounded-lg transition duration-300'
          >
            Login
          </button>
        </form>
        <p className='text-sm text-center text-white/70'>
          Don't have an account?{' '}
          <Link to='/register' className='underline text-fuchsia-400 hover:text-fuchsia-200'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
