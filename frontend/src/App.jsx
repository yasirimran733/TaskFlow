import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import LandingPage from "./pages/Landing/LandingPage"
function App() {
  return (
    // <RouterProvider router={router}/>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
    </Routes>
  )
}

export default App