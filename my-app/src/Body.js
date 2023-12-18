import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Body = () => {
    return(
       <Container sx={{height:"900px"}}>
         <Box sx={{height:"300px"}}></Box>
         <Typography variant='h2' align='center'>The Body</Typography>
       </Container>
    )
};

export default Body