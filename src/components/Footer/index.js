// Footer.js
import React, { useState } from "react";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Dialog from "./Dialog"; // Adjust the import path based on your project structure
import { Button } from "@mui/material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;  

const ContactInfo = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const ContactIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleManageClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleManageSiteClick= () =>{
     setIsDialogOpen(true);
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>3J Adventure Tours LLP</Logo>
        <Nav>
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#projects">Upcoming Tours</NavLink>
          <NavLink href="#skills">Custom Trips</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button style={{ color: "#111111",fontFamily: "Poppins, sans-serif",fontSize:"19.2px",paddingTop:"0px" }}
          onClick={handleManageSiteClick}>Manage site</Button>
        </Nav>
        <ContactInfo>
          <ContactItem>
            <ContactIcon>
              <PhoneIcon />
            </ContactIcon>
            <ContactText>+1 123-456-7890</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <EmailIcon />
            </ContactIcon>
            <ContactText>info@3jadventuretours.com</ContactText>
          </ContactItem>
        </ContactInfo>
        <Copyright>
          &copy; 2023 3J Adventure Tours. All rights reserved.
        </Copyright>
        <Dialog open={isDialogOpen} onClose={handleCloseDialog} />
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
