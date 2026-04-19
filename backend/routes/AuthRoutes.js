import express from "express"
import { signup, login, getAllUsers } from "../controllers/AuthControllers.js";

// Make router object for api routes
const router = express.Router();

// here call will goes to controllers
router.post("/api/signup", signup)
router.post("/api/login", login)
router.get("/api/users", getAllUsers)

export default router