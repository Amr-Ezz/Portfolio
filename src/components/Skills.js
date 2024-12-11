import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import colorSharp from "../assets/color-sharp.png";
import { AiFillGithub } from "react-icons/ai";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import { FaReact, FaSass } from "react-icons/fa";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Technologies & Tools</h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <AiFillGithub className="icons" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <SiRedux className="icons" />
                  <h5>Redux Toolkit</h5>
                </div>
                <div className="item">
                  <SiTailwindcss className="icons" />
                  <h5>TailWind</h5>
                </div>
                <div className="item">
                  <FaReact className="icons" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <FaSass className="icons" />
                  <h5>Sass</h5>
                </div>
                <div className="item">
                  <SiTypescript className="icons" />
                  <h5>TypeScript</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="Background Color" className="background-image-left" />
    </section>
  );
};

export default Skills;
