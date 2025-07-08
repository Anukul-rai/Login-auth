import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'
import {ToastContainer} from 'react-toastify'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
        <ToastContainer />
    </div>
  )
}

export default App
