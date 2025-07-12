import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
function Dashboard() {
  const userName = JSON.parse(localStorage.getItem('user'))
  const navigate =useNavigate()

  const hanldeLogout=()=>{
    localStorage.removeItem('loggedIn')
    navigate('/login')
    toast.success('Logged Out successfully')
  }
  return (
    <div className='bg-gradient-to-br from-pink-800 to-white/90 min-h-screen flex items-center justify-center'>
      <div className=' p-5 rounded-xl flex items-center justify-center flex-col'>
              <h1 className="font-extrabold text-4xl">Dashboard</h1>
              <p className="font-light text-2xl">Welcome <span className="capitalize font-semibold">"{userName.name}"</span> </p>
      </div>
        <button 
          onClick={hanldeLogout}
          className=" px-3.5 py-0.5 rounded-4xl bg-white border border-white cursor-pointer hover:bg-red-800 hover:border-0 hover:text-white text-lg">
          Log out</button>
    </div>
  )
}

export default Dashboard
