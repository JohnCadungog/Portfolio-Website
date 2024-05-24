import React from "react";
import { Grid, Paper, Typography, Container, Box } from "@mui/material";
import JavaIcon from "../assets/icons/java.png";
import PythonIcon from "../assets/icons/python.png";
import JavaScriptIcon from "../assets/icons/js.png";
import CSharpIcon from "../assets/icons/c-sharp.png";
import HtmlIcon from "../assets/icons/html.png";
import ReactIcon from "../assets/icons/react.png";
import Android from "../assets/icons/android.png"

import Api from "../assets/icons/api.png";
import Css from "../assets/icons/css.png";
import Django from "../assets/icons/django.png";
import Git from "../assets/icons/git.png";

import Keras from "../assets/icons/keras.png";
import Reactss from "../assets/icons/react.png";
import Spring from "../assets/icons/spring.png";
import Sql from "../assets/icons/sql.png";
import Tensorflow from "../assets/icons/tensorflow.png";

const skills = [
  { name: "Java", icon: JavaIcon },
  { name: "Python", icon: PythonIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "C-Sharp", icon: CSharpIcon },
  { name: "HTML", icon: HtmlIcon },
  { name: "React", icon: ReactIcon },
  { name: "Restful API", icon: Api },
  { name: "CSS", icon: Css },
  { name: "Django", icon: Django },
  { name: "Git", icon: Git },
  { name: "Keras", icon: Keras },
  { name: "Android", icon: Android }, // Should this be "React" or "Seact"?
  { name: "Spring", icon: Spring },
  { name: "MySQL", icon: Sql },
  { name: "Tensorflow", icon: Tensorflow },
];

const TechnicalSkills = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{fontWeight:"bold"}}>
        TECHNICAL SKILLS
      </Typography>
      <Grid container spacing={2} justifyContent="center" marginTop="50px" flexDirection="row">
        {skills.map((skill, index) => (
          <Grid item xs={5} sm={4} md={4} lg={2} key={index} >
            <Paper
              sx={{
                padding: 1,
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                borderRadius: "15px",
                boxShadow: 4,
                width: "160px",
                height: "50px",
              }}
            >
              <Box component="img" src={skill.icon} alt={`${skill.name} icon`} sx={{ width: 40, height: 40, marginLeft: 1, marginRight: 1 }} />
              <Typography variant="h6" color="#8E8E8E">{skill.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TechnicalSkills;
