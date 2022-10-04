import axios from "axios";
const URL = 'http://localhost:3001/posts'

const getPosts = () => {
    return axios.get(URL)
  }

  
const creatPost = (newPost) => { 
    axios.post(URL, newPost)
}

const editPost = (changedPost, id) => {
    return axios.put('http://localhost:3001/posts/${id}', changedPost)
  }

  export default {getPosts, creatPost, editPost}