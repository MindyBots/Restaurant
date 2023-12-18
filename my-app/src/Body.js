import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Body = () => {
    return(
       <Container sx={{height:"930px"}}>
         <Box sx={{height:"450px"}}></Box>
         <Typography variant='h2' align='center'>The Body</Typography>
       </Container>
    )
};

export default Body