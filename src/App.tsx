import React from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import FormCardComponent from './components/cardExample';

function App() {
  return (
    <div className="user-registration-app">
      <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h4" gutterBottom>
        This is a User Registration Form
      </Typography>

      <FormCardComponent name="Shailesh" />
    </Box>
    </div>
  );
}

export default App;
