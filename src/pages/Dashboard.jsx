import { Link, useNavigate } from "react-router-dom"
function Dashboard() {
  const userName = JSON.parse(localStorage.getItem('user'))
  const navigate =useNavigate()

  const hanldeLogout=()=>{
    localStorage.removeItem('loggedIn')
    navigate('/login')
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black'>
      <div className='bg-white p-5 rounded-xl'>
              <h1 className="text-center">Dashboard</h1>
              <p className="text-center text-3xl">Welcome {userName.name}</p>
              <button 
              onClick={hanldeLogout}
              className="border px-3 py-1 rounded-4xl bg-blue-400 cursor-pointer hover:bg-red-800">
              Log out</button>
      </div>
    </div>
  )
}

export default Dashboard
