import {createBrowserRouter} from "react-router-dom"
import LandingPage from "../pages/Landing/LandingPage"
import SignupPage from "../pages/Auth/SignupPage"
import LoginPage from "../pages/Auth/LoginPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import DashboardPage from "../pages/Dashboard/DashboardPage"
const router = createBrowserRouter([
    {path:"/" , element:<LandingPage/>},
    {path:"/signup" , element:<SignupPage/>},
    {path:"/login" , element:<LoginPage/>},
    {path:"/profile" , element:<ProfilePage/>},
    {path:"/dashboard" , element:<DashboardPage/>},
])

export default router