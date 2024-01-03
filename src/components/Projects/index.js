import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/projectCard";
import { projects } from "../../data/constants";
import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Projects = ({ openModal, setOpenModal }) => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState("all");

  useEffect(() => {
    onSnapshot(collection(db, "Tours"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Tours</Title>
        <Desc>Here is a list of tours currently available</Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "India" ? (
            <ToggleButton
              active
              value="India"
              onClick={() => setToggle("India")}
            >
              India
            </ToggleButton>
          ) : (
            <ToggleButton value="India" onClick={() => setToggle("India")}>
              India
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Other country" ? (
            <ToggleButton
              active
              value="Other country"
              onClick={() => setToggle("Other country")}
            >
              Other country
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Other country"
              onClick={() => setToggle("Other country")}
            >
              Other country
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
