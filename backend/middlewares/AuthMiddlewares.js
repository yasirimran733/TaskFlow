import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

export const protectedRoutes = async (req, res, next) => {
    try {
        // get token from headers

        const token = req.headers.authorization?.split(' ')[1]

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authorization Falied."
            });
        }

        // verify token and access user
        const secretKey = process.env.JWT_KEY;
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.user = decoded;
        // Call next function
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}