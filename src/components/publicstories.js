import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function PublicStories() {
  return (
    <Card sx={{ 
        minWidth: 275,
        maxWidth: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'}}>
      <CardContent>
        <Typography variant= "h4" gutterBottom>
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div" gutterBottom>
          Story
        </Typography>
        <Stack direction="row" spacing={1}>
            <Chip
                avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                label="Avatar"
                variant="outlined"
            />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Read More</Button>
      </CardActions>
    </Card>
  );
}