import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Form from './form';



export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography 
          sx={{ textAlign: "center" }}
          variant="h4" 
          component="h1"
          gutterBottom
        >
          Where should we eat?
        </Typography>
        <Form />
      </Box>
    </Container>
  );
}