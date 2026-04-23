import axios from "axios"

export const createTask = async ({data}) =>{
    const token = localStorage.get("token")
    return axios.post("http://localhost:5000/api/tasks",{data})
}

export const updateTask = async ({data,id}) =>{
    const token = localStorage.get("token")
    return axios.put("http://localhost:5000/api/tasks/:id",{data})
}

export const deleteTask = async ({data,id}) =>{
    const token = localStorage.get("token")
    return axios.delete("http://localhost:5000/api/tasks/:id")
}

export const getTask = async ({data,id}) =>{
    const token = localStorage.get("token")
    return axios.get("http://localhost:5000/api/tasks/:id")
}

export const getTasks = async () =>{
    const token = localStorage.get("token")
    return axios.get("http://localhost:5000/api/tasks")
}
export const updateStatus = async ({status,id}) =>{
    const token = localStorage.get("token")
    return axios.patch("http://localhost:5000/api/tasks/:id/status",{status})
}
