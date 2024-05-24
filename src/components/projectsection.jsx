import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container
} from "@mui/material";
import BirdBones from "../assets/projectimages/birdbones.png";
import Ecoswap from "../assets/projectimages/ecoswap.png";
import Elevateme from "../assets/projectimages/elevateme.png";
import MetroEvents from "../assets/projectimages/metroevents.png";
import Rscpu from "../assets/projectimages/rscpu.png";
import Tictactoe from "../assets/projectimages/tictactoe.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Bird Bones",
      description:
        "A Machine Learning Project that classifies a bird type according to the given bird bone measurements",
      imgPath: BirdBones,
      githubLink: "https://colab.research.google.com/drive/1upmr3Qqky7TigFZ3c3BOwWO7cClf-Pau",
    },
    {
      id: 2,
      title: "EcoSwap",
      description:
        "An Ecommerce Android project for recyling materials, you can see browse for recycling tutorials",
      imgPath: Ecoswap,
      githubLink: "https://github.com/JohnCadungog/EcoSwap1",
    },
    {
      id: 3,
      title: "ElevateMe",
      description:
        "ElevateMe is a project that uses AI model from OpenAI to help automate the Ideation process of a project ",
      imgPath: Elevateme,
      githubLink: "https://github.com/JohnCadungog/ElevateMe-Backend",
    },
    {
      id: 4,
      title: "Metro Events",
      description:
        "Metro Events is an Event Scheduler platform. It uses React Springboot in the backend",
      imgPath: MetroEvents,
      githubLink: "https://github.com/JohnCadungog/metro-events-api",
    },
    {
      id: 5,
      title: "RSCPU",
      description:
        "RSCPU is a Simulator application that interprets a machine language, Created with java GUI",
      imgPath: Rscpu,
      githubLink: "https://github.com/JohnCadungog/RSCPU",
    },
    {
      id: 6,
      title: "Tic Tac Toe",
      description:
        "Tictactoe is a personal project, It is a game of two local players competing for a win in TicTacToe",
      imgPath: Tictactoe,
      githubLink: "https://github.com/JohnCadungog/tictactoe    ",
    },
  ];

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#333",
          textTransform: "uppercase",
          marginBottom: 4,
        }}
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ width: "80%", margin: "auto" }}
        marginTop="50px"
      >
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={project.id}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                width: "300px", // Card width
                height: "430px", // Card height
                margin: "auto", // Center the card horizontally
                boxShadow: 5, // Card shadow
                borderRadius: 5, // Border radius
                overflow: "hidden", // Ensure the content does not overflow the rounded corners
              }}
            >
              <CardMedia
                component="img"
                image={project.imgPath}
                title={project.title}
                sx={{
                  borderRadius: "16px",
                  width: "93%", // Full width of the card
                  height: "200px", // Adjusted image height
                  objectFit: "cover",
                  marginTop: "10px", // Margin top to the image
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginBottom: "10px", // Margin bottom to create space between the image and the content below
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
                  {project.title}
                </Typography>
                <Typography
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    height: "40px",
                    borderRadius: 4,
                    backgroundColor: "#FFFFF",
                    "&:hover": {
                      backgroundColor: "#7d7d7d",
                    },
                    mt: 2,
                  }}
                >
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectSection;
