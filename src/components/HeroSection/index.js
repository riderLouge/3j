import React, { useEffect, useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  HeroRightContainer,
  HeroInnerContainer,
  Title,
  ResumeButton,
} from "./HeroStyle";
// import HeroImg from "../../images/HeroImage.jpg";
import pic1 from "../../asset/pic1.jpg";
import pic2 from "../../asset/pic2.jpg";
import pic3 from "../../asset/pic3.jpg";
import pic4 from "../../asset/pic4.jpg";
import pic5 from "../../asset/pic5.jpg";

const images = [pic1, pic2, pic3, pic4, pic5];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div id="about">
      <HeroContainer imageUrl={images[currentImageIndex]}>
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
