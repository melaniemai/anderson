import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Form() {
  return (
    <form>
     <Typography
        sx={{ textAlign: "center" }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Type of cuisine
      </Typography>
    </form>
  );
}