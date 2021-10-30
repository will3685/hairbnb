import React from "react";
import { Container, Col, Row } from "react-bootstrap";


import {
  Box,
  FooterLink,
  Heading,
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
        <Col>
          <Row>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Row>
        </Col>
        <Col>
          <Row>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </Row>
        </Col>
        <Col>
          <Row>
            <Heading>Contact Us</Heading>
            <FooterLink href="#" target="_blank">Gmail</FooterLink>
            <FooterLink href="#" target="_blank">LinkedIn</FooterLink>
            <FooterLink href="#" target="_blank">GitHub</FooterLink>
            <FooterLink href="https://willtheard.dev" target="_blank">Will Theard</FooterLink>
          </Row>
        </Col>
        <Col>
          <Row>
          <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
            </Row>
          </Col>
      </Row>
      </Container>
    </Box>
  )
}
export default Footer;