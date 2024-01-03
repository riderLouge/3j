import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroStyle";
// import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>{/* <HeroBgAnimation /> */}</HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Where Every Journey is an Adventure of a Lifetime.</Title>

            {/* <SubTitle>{Bio.description}</SubTitle> */}
            <ResumeButton href="#contact">Book Now</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            {/* <Img src={HeroImg} alt="hero-image" /> */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
