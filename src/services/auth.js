import axios from "axios";
const URL = 'http://localhost:3001/posts'

const register = (newUser) => {
    return axios.post(`${URL}/register`, newUser)
}

export default {register}