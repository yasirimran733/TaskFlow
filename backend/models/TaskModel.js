import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['ToDo', 'InProgress', 'Done'],
        default: 'ToDo'
    },
    deadline: {
        type: Date,
        default: Date.now
    },
},
    { timestamps: true }
)

const Task = mongoose.model("Task", TaskSchema)

export default Task