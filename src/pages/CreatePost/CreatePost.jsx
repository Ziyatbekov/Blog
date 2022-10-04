import React, {useState} from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import postService from '../../services/posts'
import TextField from '@mui/material/TextField';
import './createPost.css'



const CreatPost = (e) => {
    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [open, setOpen] = React.useState(false);
    
    const handleClose = () => {
        setOpen(false)
    } 

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            name,
            duration,
            important : Math.random() > 0.5
        }
        postService
          .creatPost()
            .then(res => console.log(res))
            .catch(err => {
                setName('')
                setDuration('')
                setOpen(true)
            })
    }

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            X
          </IconButton>
        </React.Fragment>
      );

    return (
        <div className='form-wrapper'>
            <form onSubmit={addPost} >
              <h1>Создать пост</h1>
                <TextField 
                  label="Название" 
                  variant="outlined" 
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  />
                <TextField 
                  label="Длительность" 
                  variant="outlined" 
                  type="number" 
                  value={duration} 
                  onChange={e => setDuration(e.target.value)} 
                  />
                  <Button type="submit" variant="contained">
                    Отправить
                  </Button>
            </form>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Пост успешно создан"
                    action={action}
                />
            </div>
        </div>
    );
};

export default CreatPost;