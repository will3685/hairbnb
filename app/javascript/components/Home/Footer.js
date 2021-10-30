import React from "react";
import { Container } from "react-bootstrap";
import { Divider } from 'antd';

import {
  Box,
  FooterLink,
  Heading,
  Row,
  Column,
  FooterSocial,
  HeadingSocial,
  SocialIcon,
  FooterLinkSocial
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box style={{ backgroundColor: "gray"}}>
      <h2 style={{  
        textAlign: "center" }}>
        NAPPY: A Stylist Platform for your Beauty
      </h2>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">How it works</FooterLink>
            <FooterLink href="#">Investidores</FooterLink>
            <FooterLink href="#">Nappy for work</FooterLink>
            <FooterLink href="#">Carrer</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#" target="_blank">Gmail</FooterLink>
            <FooterLink href="#" target="_blank">LinkedIn</FooterLink>
            <FooterLink href="#" target="_blank">GitHub</FooterLink>
            <FooterLink href="https://willtheard.dev" target="_blank">Will Theard</FooterLink>
          </Column>
          <Column>
            <Heading>Atendimento</Heading>
            <FooterLink href="#" target="_blank">Central de ajuda</FooterLink>
            <FooterLink href="#" target="_blank">Opções de cancelamento</FooterLink>
            <FooterLink href="#" target="_blank">Confiança e Segurança</FooterLink>
          </Column>
        </Row>
        <Divider />
        <FooterSocial>
          <HeadingSocial>
            <Heading
              style={{paddingRight:8}}
            >© 2022 Nappy, Inc. · </Heading>
            <FooterLink 
              href="#"
              style={{paddingRight:8}}
              >Privacidade</FooterLink>
            <FooterLink href="#">Termos E Compromissos</FooterLink>
          </HeadingSocial>
          <SocialIcon>
            <FooterLinkSocial 
              href="#"
              >
              <i className="fab fa-instagram"></i>
            </FooterLinkSocial>
            <FooterLinkSocial href="#">
              <i className="fab fa-youtube"></i>
            </FooterLinkSocial>
            <FooterLinkSocial href="#">
              <i className="fab fa-linkedin"></i>
            </FooterLinkSocial>
          </SocialIcon>
        </FooterSocial>
      </Container>
    </Box>
  )
}
export default Footer;