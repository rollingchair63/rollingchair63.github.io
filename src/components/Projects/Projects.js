import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import project1Img from '../../assets/img/project1.jpg';
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="section-title mb-5 text-center">Projects</h2>

        {/* Project 1 */}
        <Row className="mb-5 align-items-center text-start">
          <Col md={5}>
            <img
              src={project1Img}
              alt="Surgipedia App"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '100%', width: '300px' }}
            />
          </Col>
          <Col md={7}>
            <h4 className="mb-2">Surgipedia</h4>
            <p>
              A speech-to-text and image-to-text mockup designed for surgical researchers
              to efficiently transcribe audio and visual data into structured outputs.
              Built for the NUS Health Hack 2025, Surgipedia helps clinicians convert complex surgical media into usable insights.
            </p>
            <div className="skills">
              <span className="capsule">Figma</span>
              <span className="capsule">React</span>
              <span className="capsule">Tailwind CSS</span>
              <span className="capsule">Deno</span>
            </div>
          </Col>
        </Row>

        {/* Project 2 */}
        <Row className="mb-5 align-items-center text-start">
          <Col md={5}>
            <img
              src="/images/project2.jpg"
              alt="Portfolio Website"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '100%', width: '300px' }}
            />
          </Col>
          <Col md={7}>
            <h4 className="mb-2">Portfolio Website (here!)</h4>
            <p>
              Personal portfolio website showcasing my work and skills, with smooth scrolling, responsive layout, and themed design.
            </p>
            <div className="skills">
              <span className="capsule">React</span>
              <span className="capsule">JavaScript</span>
              <span className="capsule">CSS</span>
            </div>
          </Col>
        </Row>
        {/* Project 3 */}
        <Row className="mb-5 align-items-center text-start">
          <Col md={5}>
            <img
              src="/images/project3.jpg"
              alt="Captcha Demo"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '100%', width: '300px' }}
            />
          </Col>
          <Col md={7}>
            <h4 className="mb-3"> Captcha Demo</h4>
            <p>
              A simple captcha demo built with React, allowing users to select images based on categories.
            </p>
            <Link to="/captcha-demo" className="demo-btn">
              Try Demo →
            </Link>
            <div className="skills">
              <span className="capsule">React</span>
              <span className="capsule">JavaScript</span>
              <span className="capsule">CSS</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}