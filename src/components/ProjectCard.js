import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./ProjectCard.css";
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";

const ProjectCard = ({ title, description, imgUrl, liveDemo, githubRepo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Col sm={6} md={4} className="pt-4">
      <div className="projectCard-imageBox">
        <img src={imgUrl} alt="project-card" />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="toggle-container">
          <button className="toggle-button" onClick={handleClick}>
            {isOpen ? "Hide Project Links" : "View Project Links"}
          </button>
          {isOpen && (
            <div className="projects-link">
              <a href={githubRepo} className="project-link">
                <AiFillGithub className="icon" />
                Github Repository
              </a>
              {liveDemo && (
                <a
                  href={liveDemo}
                  className="project-link"
                >
                  <CgMediaLive className="icon" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
