import { Link } from "react-router-dom"
function Dashboard() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black'>
      <div className='bg-white p-5 rounded-xl'>
              <Link to='/'><h1>Dashboard</h1></Link>
      </div>
    </div>
  )
}

export default Dashboard
