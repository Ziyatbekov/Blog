import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setlogin] = useState('MY LOGIN')
    const [age, setAge] = useState('Age')
    const [gender, setGender] = useState('gender')

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        axios
            .post('http://localhost:3001/login', user)
            .then(res => {
              setlogin(res.data.user.login)
              setAge(res.data.user.age)
              setGender(res.data.user.gender)
            })
            .catch(err => console.log(err.data))
            setEmail('')
            setPassword('')
    }

    return (
        <div className='form-wrapper'>
          <p style={{textAlign : "center"}}>Nickname: {login}</p>
          <p style={{textAlign : "center"}}>Age: {age} </p>
          <p style={{textAlign : "center"}}>Gender: {gender}</p>
            <form onSubmit={handleLogin} >
              <h1>Логин</h1>
                <TextField 
                  label="Email" 
                  variant="outlined" 
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
                <TextField 
                  label="Password" 
                  variant="outlined" 
                  type="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  />
                  <Button type="submit" variant="contained">
                    Войти
                  </Button>
            </form>
        </div>
    );
};

export default LoginPage;