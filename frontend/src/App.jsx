import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import LandingPage from "./pages/Landing/LandingPage"
import SignupPage from "./pages/Auth/SignupPage"
import LoginPage from "./pages/Auth/LoginPage"
function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
  )
}

export default App