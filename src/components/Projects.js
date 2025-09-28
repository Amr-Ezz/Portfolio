import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png";
import "./Projects.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Resturant from "../assets/Resturant-Screen-Portfolio.png";
import Ecommerce from "../assets/E-Commerce.png";
import Anime from "../assets/Anime.png";
import NFTimage1 from "../assets/NFTGameHub1.png";
import EShop from "../assets/E-Shop.png";
import AI from "../assets/AI.png";
import Analytics from "../assets/analytics.png";

const Projects = () => {
  const projects = [
    {
      title: "Go Shop",
      description:
        "Designed and launched a scalable e-commerce platform using React and Firebase achieving 98% user authentication reliability",
      imgUrl: EShop,
      githubRepo: "https://github.com/Amr-Ezz/E-Shop",
      liveDemo: "https://e-shop-virid-kappa.vercel.app",
    },
    {
      title: "AI Blog Posting APP",
      description:
        "Developed a Next.js blog application with AI content generation capabilities implementing a custom API route that integrates with GitHub/Azure AI models to dynamically generate blog posts based on user prompts",
      imgUrl: AI,
      githubRepo: "https://github.com/Amr-Ezz/AI_Blog",
      liveDemo: "https://ai-blog-g96t-pkgs4vy9s-amr-ezzs-projects.vercel.app/",
    },
    {
      title: "Business Analytics Dashboard",
      description:
        "Developed a comprehensive analytics dashboard using React and Chart.js, enabling real-time data visualization and insights for business decision-making.",
      imgUrl: Analytics,
      githubRepo: "https://github.com/Amr-Ezz/analytics-dashboard",
      liveDemo: "https://analytics-dashboard-tan-one.vercel.app/",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: EShop2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: EShop3,
    // },
    {
      title: "Business Startup",
      description:
        "Discover the latest electronics with our sleek e-commerce site built using Sanity and React Context. Enjoy a fast, seamless shopping experience for all your tech needs!",
      imgUrl: Ecommerce,
      githubRepo: "https://github.com/Amr-Ezz/E-Commerce",
      liveDemo: "https://e-commerce-l94azt1pn-amr-ezzs-projects.vercel.app/",
    },

    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: Ecommerce1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: Ecommerce2,
    // },
    {
      title: "GameHub",
      description: "Design & Development",
      imgUrl: NFTimage1,
    },
    {
      title: "AstroAnime",
      description: "Design & Development",
      imgUrl: Anime,
    },
    {
      title: "Resturant Startup",
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
      <img
        className="background-img-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};

export default Projects;
