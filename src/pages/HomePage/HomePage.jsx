import React , { useEffect, useState } from 'react';
import './homepage.css';
import CourseItem from '../../components/Courseitem/CourseItem';
import axios from 'axios';
import postService from '../../services/posts'



const HomePage = () => {
// axios methon get 
  const [posts, setPosts] = useState([])
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    postService
      .getPosts()
        .then(res => setPosts(res.data))
  }, [])

  const deletePost = (id) => {
    axios
        .delete(`http://localhost:3001/posts/${id}`)
        .then(res => {
          setPosts(posts.filter(post => post.id !== id
          ))
        })
  }

  const filteredPosts = showAll ? posts : posts.filter(post => post.important === true)
  
  const changeImportance = (id) => {
    const post = posts.find(post => post.id === id)
    console.log(post)
    const changedPost = {
      ...post,
      important : !post.important
    }
    postService
      .editPost(changedPost, id)
        .then(res => setPosts(posts.map(post => post.id === id ? changedPost : post )))
}
 
  return (
    <>
    <h1>Пройденный курс</h1>
    <button onClick={() => setShowAll(!showAll)} >Показать {showAll ? 'только важные' : 'все' }</button>
    
    <div className="course_list">
      {
        filteredPosts.map(course => {
         return (
         <CourseItem 
          key = {course.id} 
          name={course.name} 
          duration={course.duration} 
          status={course.important}
          changeImportance={() => changeImportance(course.id)} 
          deletePost={() => deletePost(course.id)}
          />)
        })
      }
    </div>
  </>
  );
};

export default HomePage;