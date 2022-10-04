import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import CreatPost from './pages/CreatePost/CreatePost';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';


const Greeting = (props) => {
  return(
    <>
    <h1>Hello, {props.name}</h1>
    <h2>I'm {props.age}</h2>
    </>
  )
}
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/create" element={<CreatPost/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
