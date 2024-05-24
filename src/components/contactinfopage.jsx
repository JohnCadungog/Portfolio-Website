import React from 'react';
import { Container, Typography, Box, Paper, Grid, IconButton } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const ContactInfoPage = () => {
  const contactDetails = {
    email: 'johnlocay2@gmail.com',
    phoneNumber: '+63 946 247 9239',
    facebook: 'https://www.facebook.com/iamjohncadungog/',
    instagram: 'https://www.instagram.com/jan_cdngg/',
    linkedin: 'https://www.linkedin.com/in/john-cadungog-480a5430a/',
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8, maxWidth: 500 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Contact Me:
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Feel free to reach out to me for any inquiries or collaborations.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, width:'30%', margin:"auto"}}>   
        <IconButton aria-label="facebook" size="large" component="a" href={contactDetails.facebook} target="_blank" rel="noreferrer">
          <FacebookOutlinedIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="instagram" size="large" component="a" href={contactDetails.instagram} target="_blank" rel="noreferrer">
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="linkedin" size="large" component="a" href={contactDetails.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Box>
      <Paper elevation={3} sx={{ p: 1, mb: 4, borderRadius: 16, flexDirection:"row" , display:"flex", alignItems:"center", justifyContent:"center"}}>
        {/* <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>Email:</Typography> */}
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'white', borderRadius: 16, p: 2, flexDirection: 'row', justifyContent: 'center' }}>
          <EmailOutlinedIcon fontSize="large" sx={{ mr: 2 }} />
          <span>{contactDetails.email}</span>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 1, mb: 4, borderRadius: 16, flexDirection:"row" , display:"flex",alignItems:"center", justifyContent:"center"}}>
        {/* <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>Phone Number:</Typography> */}
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'white', borderRadius: 16, p: 2, flexDirection: 'row', justifyContent: 'center' }}>
          <LocalPhoneOutlinedIcon fontSize="large" sx={{ mr: 2 }} />
          <span>{contactDetails.phoneNumber}</span>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactInfoPage;
