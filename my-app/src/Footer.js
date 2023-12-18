import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          Your Copyright or Footer Information
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
