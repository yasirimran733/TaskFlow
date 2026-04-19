import Task from "../models/TaskModel.js";
import jwt from "jsonwebtoken"

export const createTask = async (req, res) => {
    const { userId } = req.user;
    const { description, status, dead_line } = req.body;

    try {
        if (!description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const task = await Task.create({
            user: userId,
            description: description,
            status: status,
            dead_line: dead_line
        })

        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            task: {
                user: userId,
                _id: task._id,
                description: task.description,
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    try {
        if (!description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const task = await Task.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Task Updated successfully",
            task: {
                description: task.description,
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {

        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Task Deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Task returned successfully",
            task: task
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const getTasks = async (req, res) => {
    const { userId } = req.user;
    const { status, search, page = 1, limit = 10 } = req.query;

    try {

        let filter = {}
        filter.user = userId;

        if (search) {
            filter.description = { $regex: search, $options: "i" };
        }

        if (status) {
            filter.status = status;
        }

        const skip = (Number(page) - 1) * Number(limit);

        const tasks = await Task.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit));

        if (!tasks) {
            return res.status(200).json({
                success: true,
                message: "Not tasks found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Task returned successfully",
            tasks: tasks
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


export const updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    console.log("ID:", req.params.id);
    console.log("BODY:", req.body);
    try {
        // Check if status in db
        if (!['ToDo', 'InProgress', 'Done'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Status Not found"
            });
        }
        // update
        const task = await Task.findByIdAndUpdate(
            id,
            { status: status },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task Status Updated successfully",
            task: {
                status: task.status,
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

