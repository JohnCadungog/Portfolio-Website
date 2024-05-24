import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../components/navbar.jsx";
import Profile from "../assets/profile.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TechnicalSkills from "../components/technicalskills.jsx";
import ProjectSection from "../components/projectsection.jsx";
import ContactInfoPage from "../components/contactinfopage.jsx";
import DownloadIcon from "@mui/icons-material/Download"; 

// Define styles using styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));
const HeroContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 0, 6),
}));
const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));
const CardStyled = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));
const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  paddingTop: "56.25%", // 16:9 aspect ratio
}));

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <HeroContent>
          {/* Frontpage section */}
          <Grid
            container
            rowGap={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom:"100px",
              textAlign: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Profile Pic section */}
              <img
                src={Profile}
                alt="Your Image Description"
                style={{
                  border: "solid 2px black",
                  borderRadius: "50%",
                  maxWidth: "300px",
                  maxHeight: "200px",
                  margin: "20px auto",
                }}
              />
              <Typography
                variant="h5"
                color="textSecondary"
                paragraph
                sx={{ fontWeight: "bold", fontSize: "24px" }}
              >
                John Cadungog
              </Typography>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  marginTop: "-21px",
                }}
              >
                <IconButton sx={{ padding: "0", marginTop: "-13px" }}>
                  <LocationOnOutlinedIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  paragraph
                  sx={{ fontSize: "15px" }}
                >
                  Basak Mandaue City, Cebu 6014
                </Typography>
              </Container>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              {/* Description Section */}
              <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Typography
                  variant="h2"
                  align="left"
                  color="textPrimary"
                  fontWeight="bold"
                >
                  Hello,
                </Typography>
                <Typography
                  variant="h4"
                  align="left"
                  color="textPrimary"
                  sx={{ fontWeight: 'bold', marginLeft: 1 }}
                >
                  I am a...
                </Typography>
              </Box>
              <Typography
                variant="body1"
                align="left"
                color="textSecondary"
                paragraph
              >
                Highly motivated Computer Science student with a strong
                foundation in programming languages and web development
                technologies. Proven ability to design, develop, and implement
                software solutions through personal and academic projects. Eager
                to gain hands-on experience in a fast-paced environment and
                contribute to cutting-edge software development.
              </Typography>
              {/* Contacts Section */}
              <Container sx={{ marginTop: "16px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Container
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <EmailOutlinedIcon />
                      <Typography variant="body1" color="textSecondary">
                        johnlocay2@gmail.com
                      </Typography>
                    </Container>
                    <Container
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <GitHubIcon />
                      <Typography variant="body1" color="textSecondary">
                     JohnCadungog
                      </Typography>
                    </Container>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Container
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <FacebookIcon />
                      <Typography variant="body1" color="textSecondary">
                      iamjohncadungog
                      </Typography>
                    </Container>
                    <Container
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LinkedInIcon />
                      <Typography variant="body1" color="textSecondary">
                      john Cadungog
                      </Typography>
                    </Container>
                  </Grid>
                  <Container sx={{ display: "flex", justifyContent: "center",marginTop:"30px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        component="a"
                        href="https://drive.google.com/file/d/1w62okAgyIIhntBRBnsC8R9gnJBEnS-eK/view?usp=sharing"
                        download
                        startIcon={<DownloadIcon />} // Add Download Icon
                        sx={{ width: "200px", borderRadius:"12px" }} // Adjust button width
                      >
                        Download CV
                      </Button>
                    </Box>
                  </Container>
                </Grid>
              </Container>
            </Grid>
          </Grid>

          {/*For Technical Skills here, create cards with curve border,  in this format:
                      <javaicon> java      <pythonicon> python       <javascripticon> javascript
                      <c#icon> c#          <hmtlicon> html            <reacticon> react   
                      
                      
                    */}
          <TechnicalSkills />

          {/* Project Section */}
        </HeroContent>
        <ProjectSection />
        <ContactInfoPage />
      </main>
    </React.Fragment>
  );
};

export default Homepage;
