import axios from 'axios'

const instance = axios.create({
    //baseURL: "http://localhost:8001"
    baseURL: "https://git.heroku.com/dating-app-mern119.git"
})

export default instance
