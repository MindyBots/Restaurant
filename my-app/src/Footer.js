import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', backgroundColor: '#cfd8dc', padding: '10px 0' }}>
      <br />
      <Button color="primary" aria-label="Facebook" variant='contained' sx={{ml:4}}>
        <FacebookIcon />
      </Button>
      <Button color="error" aria-label="YouTube" variant='contained' sx={{ml:2}}>
        <YouTubeIcon />
      </Button>
      <Button color="primary" aria-label="WhatsApp" variant='contained' sx={{ml:2}}>
        <LinkedInIcon />
      </Button>
      <Typography variant='h5' sx={{display:'inline-block', ml:83, mt:3}}>Copyrights</Typography>
      <Box sx={{display:'inline-block', ml:70, bgcolor:'white', width:'300px'}}><Typography variant='h5' align='center'>Company's Address</Typography></Box>
      <br />
      <br />
    </footer>
  );
};

export default Footer;


