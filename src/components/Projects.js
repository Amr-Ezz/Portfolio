import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png";
import "./Projects.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Resturant from "../assets/Resturant-Screen-Portfolio.png";
import Ecommerce from "../assets/E-Commerce.png";
import Ecommerce1 from "../assets/E-Commerce1.png";
import Ecommerce2 from "../assets/E-Commerce2.png";
import NFTimage from "../assets/NFTGameHub.png";
import NFTimage1 from "../assets/NFTGameHub1.png";
import EShop from "../assets/E-Shop.png";
import EShop1 from "../assets/E-Shop1.png";
import EShop2 from "../assets/E-Shop2.png";
import EShop3 from "../assets/E-shop3.png";

const Projects = () => {
  const projects = [
 
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: EShop,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: EShop1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: EShop2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: EShop3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Ecommerce,
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Ecommerce1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Ecommerce2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: NFTimage1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: NFTimage,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Resturant,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  {/* <p>
                    <ul>
                      <li>
                        <a href="https://github.com/Amr-Ezz/E-Shop">https://github.com/Amr-Ezz/E-Shop</a>:{" "}
                        <a href="e-shop-virid-kappa.vercel.app">e-shop-virid-kappa.vercel.app</a>
                      </li>

                      <li>
                        <a href="e-shop-virid-kappa.vercel.app">https://github.com/Amr-Ezz/E-Commerce</a>
                      </li>
                      <li>
                        <a href="https://github.com/Amr-Ezz/Resturant">https://github.com/Amr-Ezz/Resturant</a>
                      </li>
                    </ul>
                  </p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                      {/* <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-img-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Projects;
