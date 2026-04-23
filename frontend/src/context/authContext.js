import axios from "axios"
// Make router object for api routes
const router = express.Router();

// here call will goes to controllers
router.post("/api/signup", signup)
router.post("/api/login", login)
router.get("/api/users", getAllUsers)

export default router
export const signup = async ({data}) =>{
    return axios.post("http://localhost:5000/auth/api/signup",{data})
}

export const login = async ({data}) =>{
    return axios.post("http://localhost:5000/auth/api/login",{data})
}

export const getAllUsers = async ({data}) =>{
    return axios.post("http://localhost:5000/auth/api/users")
}