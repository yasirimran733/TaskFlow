import mongoose from "mongoose";

const Schema = mongoose.Schema;

// make schema of user 
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

// model which is actually a table in sql
const User = mongoose.model("User", UserSchema)

export default User