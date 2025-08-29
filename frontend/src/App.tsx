
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'

import SignUpPage from './pages/SignUp'
import SignInPage from './pages/SignIn'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
 
      </Routes>
     
    </div>
  )
}

export default App
