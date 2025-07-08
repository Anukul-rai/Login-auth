import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className='bg-gradient-to-br from-pink-800 to-white/90 min-h-screen'>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
