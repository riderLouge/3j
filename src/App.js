import "./App.css";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import Education from "./components/Education";
import Skills from "./components/Destination";
import StatsSection from "./components/Stats";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
// const Wrapper = styled.div`
//   background: linear-gradient(
//       38.73deg,
//       rgba(255, 204, 0, 0.15) 0%,
//       rgba(255, 204, 0, 0) 50%
//     ),
//     linear-gradient(
//       141.27deg,
//       rgba(255, 204, 0, 0) 50%,
//       rgba(255, 204, 0, 0.15) 100%
//     );
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
// `;

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #f5d34c 0%, white 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({
    state: false,
    project: null,
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Skills />
            <StatsSection />

            <div style={{ paddingBottom: "100px", paddingTop: "100px" }}>
              <Contact />
            </div>
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
