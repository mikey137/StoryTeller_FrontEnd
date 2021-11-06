import { React, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function NewStory() {
  const [storyTitle, setStoryTitle] = useState("")
  const [storyBody, setStoryBody] = useState("")

  
    return (
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: 10,
          gap: 5,

        }}
        noValidate
        autoComplete="off"
      >
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            onChange={(e) => setStoryTitle(e.target.value)}
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
            <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            
            >
                <MenuItem value="">Public</MenuItem>
                <MenuItem value="">Private</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label="Tell Us Your Story:"
            multiline
            rows={10}
          />
          <Stack spacing={2} direction="row">
            <Button variant="contained">Save</Button>
            <Button variant="contained" color="error">Cancel</Button>
          </Stack>
      </Box>
    );
  }