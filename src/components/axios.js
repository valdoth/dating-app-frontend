import axios from 'axios'

const instance = axios.create({
    // baseURL: "http://localhost:8001"
    baseURL: "https://dating-app-mern119.herokuapp.com/"
})

export default instance
