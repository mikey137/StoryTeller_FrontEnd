import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import { useState} from 'react'
import axios from 'axios';

export default function Homepage() {
  const [loginUserName, setLoginUserName] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [data, setData] = useState(null)
  
  function login(){
    axios({
      method: "POST",
      data: {
        userName: loginUserName,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login"
    }).then((res) => console.log(res))
  }

  function getUser(){
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setData(res.data)
      console.log(res.data)
    })
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
          StoryTeller Login
        </Typography>
        <Box
          component="form"
          sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="Username" variant="filled" onChange={(e) => setLoginUserName(e.target.value)}/>
          <TextField id="filled-basic" label="Password" variant="filled" onChange={(e) => setLoginPassword(e.target.value)}/>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" type="submit" onClick={() => {login(); getUser()}}>Login</Button>
      </CardActions>
        <Typography variant="h6" component="div">
          Don't have an account? Register <Link className= "blue_link" to= "/register">here</Link>
        </Typography>
    </Card>
    </div>
  );
}