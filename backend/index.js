import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { connectDB } from "./config/db.js"
import AuthRoutes from "./routes/AuthRoutes.js"
import TaskRoutes from "./routes/TaskRoutes.js"
import DashBoardRoutes from "./routes/DashBoardRoutes.js"
import { protectedRoutes } from "./middlewares/AuthMiddlewares.js"

// For environnment variables
import dotenv from "dotenv"
dotenv.config()

const app = express()

//Middlewares
app.use(cors());
app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))

// API Endpoints
app.use("/auth/", AuthRoutes)
app.use("/user/", protectedRoutes, DashBoardRoutes)
app.use("/", protectedRoutes, TaskRoutes)


const PORT = process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at : ${PORT}`)
    })
})