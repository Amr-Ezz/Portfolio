import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/Logo.png";
import './Footer.css';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col size ={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size ={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/amr-elqahwagi-b79075266/">
                <img src={navIcon1} alt="" />
              </a>
              <a className="github-icon" href="https://github.com/Amr-Ezz">
                <img className="github-icon" src={navIcon2} alt="" />
              </a>
              {/* <a href="">
                <img src={navIcon3} />
              </a> */}
            </div>
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
