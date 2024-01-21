import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography}  from '@mui/material';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import cardImage from "../assets/images/card.jpg";

interface formCardProps {
    name?: string;
}

const FormCardComponent:React.FC<formCardProps> = ({name}: formCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={cardImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hi {name}, Welcome Back
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is my Card Component for Demo
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}

export default FormCardComponent;