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
import { fireStoreAccess } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Projects = ({ openModal, setOpenModal }) => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState("all");

  useEffect(() => {
    onSnapshot(collection(fireStoreAccess, "Tours"), (snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Tours</Title>
        <Desc>Here is a list of tours currently available</Desc>
        {/* <ToggleButtonGroup>
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
        </ToggleButtonGroup> */}
        <CardContainer>
          {toggle === "all" &&
            data.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {data
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
