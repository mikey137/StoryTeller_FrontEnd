import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'


export default function Register() {
  const [registerFirstName, setRegisterFirstName] = useState("")
  const [registerLastName, setRegisterLastName] = useState("")
  const [registerUserName, setRegisterUserName] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const register = () => {
    axios({
      method:"post",
      data:{
        firstName: registerFirstName,
        lastName: registerLastName,
        userName: registerUserName,
        password: registerPassword
      },
      withCredentials: true,
      url: "http://localhost:5000/register"
    }).then((res) => console.log(res))
  }

  return (
    <div id="card_wrapper">
    <Card sx={{ 
              minWidth: 275,
              maxWidth: 450,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
          }}>
      <CardContent>
        <Typography variant="h3" component="div">
          StoryTeller Register
        </Typography>
        <Box
          component="form"
          sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="First Name" variant="filled" onChange={(e) => setRegisterFirstName(e.target.value)} />
          <TextField id="filled-basic" label="Last Name" variant="filled" onChange={(e) => setRegisterLastName(e.target.value)}/>
          <TextField id="filled-basic" label="Username" variant="filled" onChange={(e) => setRegisterUserName(e.target.value)}/>
          <TextField id="filled-basic" label="Password" variant="filled" onChange={(e) => setRegisterPassword(e.target.value)}/>
        </Box>
      </CardContent>
      <CardActions>
        <Button type="submit" variant="contained" onClick= {register}>Register</Button>
      </CardActions>
        <Typography variant="h6" component="div">
          Already have an account? Login <Link className="blue_link" to="/">here</Link>
        </Typography>
    </Card>
    </div>
  );
}