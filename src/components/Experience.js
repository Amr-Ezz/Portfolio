import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Zulily",
      location: "Seattle, WA (Remote)",
      position: "Frontend Developer",
      period: "OCT 2023 – April 2024",
      responsibilities: [
        "Engineered and deployed high-performance, responsive user interfaces for a high-traffic e-commerce platform using React.js, Next.js, and TypeScript, directly supporting millions of daily flash-sale events.",
        "Optimized critical rendering path and component-level performance on key customer-facing pages (e.g., product detail, checkout), resulting in a 15% improvement in Core Web Vitals (LCP, FID) and enhancing mobile conversion rates.",
        "Collaborated within an Agile/Scrum environment to translate complex business requirements (e.g., personalized recommendations, dynamic pricing) into clean, maintainable, and reusable UI components.",
        "Integrated and managed state across the application using React Query/Context API for efficient data fetching and caching from RESTful and GraphQL APIs, ensuring real-time inventory and pricing accuracy.",
        "Contributed to a component library and enforced Tailwind CSS standards to maintain design consistency and accelerate feature development across multiple teams."
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
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
                  <h2>Experience</h2>
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    {experiences.map((exp, index) => (
                      <div key={index} className="experience-card">
                        <div className="experience-header">
                          <div className="experience-title-group">
                            <h3 className="experience-position">{exp.position}</h3>
                            <h4 className="experience-company">
                              {exp.company} | {exp.location}
                            </h4>
                          </div>
                          <span className="experience-period">{exp.period}</span>
                        </div>
                        <ul className="experience-responsibilities">
                          {exp.responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;