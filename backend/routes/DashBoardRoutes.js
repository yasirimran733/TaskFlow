import express from "express"
import { dashboard } from "../controllers/DashBoardController.js";
// Make router object for api routes
const router = express.Router();

// here call will goes to controllers
router.get("/api/dashboard", dashboard)

export default router