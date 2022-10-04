import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import authService from '../../services/auth'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setlogin] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = React.useState('female');

    const handleChange = (event) => {
      setGender(event.target.value);
    };

    const register = (e) => {
      e.preventDefault()
      const newUser = {
        email,
        password,
        login,
        age,
        gender
      }
      authService
        .register(newUser)
        .then(res => console.log(res.data))
        setEmail('')
        setPassword('')
        setlogin('')
        setAge('')
    }

    return (
        <div className='form-wrapper'>
            <form onSubmit={register} >
              <h1>Регистрация</h1>
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
                <TextField 
                  label="Login" 
                  variant="outlined" 
                  type="text" 
                  value={login} 
                  onChange={e => setlogin(e.target.value)} 
                  />
                  <TextField 
                  label="Age" 
                  variant="outlined" 
                  type="number" 
                  value={age} 
                  onChange={e => setAge(e.target.value)} 
                  />
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                  </FormControl>
                  <Button type="submit" variant="contained">
                    Зарегистрироваться
                  </Button>
            </form>
        </div>
    );
};

export default RegisterPage;