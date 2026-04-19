import express from "express"
import { createTask, updateTask, deleteTask, getTask, getTasks, updateStatus } from "../controllers/TasksControllers.js";
// Make router object for api routes
const router = express.Router();

// here call will goes to controllers
router.post("/api/tasks", createTask)
router.get("/api/tasks", getTasks)
router.delete("/api/tasks/:id", deleteTask)
router.get("/api/tasks/:id", getTask)
router.put("/api/tasks/:id", updateTask)
router.patch("/api/tasks/:id/status", updateStatus)  // status update


export default router