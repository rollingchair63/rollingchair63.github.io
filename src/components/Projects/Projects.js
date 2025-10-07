import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import "./Projects.css";

export default function Projects() {
  // Image arrays for projects with multiple screenshots
  const project1Img = '/img/project1.jpg';
  
  const project3Images = [
    '/img/project3-1.jpg',
    '/img/project3-2.jpg',
    '/img/project3-3.jpg'
  ];

  const project4Images = [
    '/img/project4-1.jpg',
    '/img/project4-2.jpg',
    '/img/project4-3.jpg'
  ];

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
            <h4 className="mb-2">NUS Health Hack 2025</h4>
            <p>
              Developed Surgipedia, a speech-to-text and image-to-text mockup designed for surgical researchers
              to efficiently transcribe audio and visual data into structured outputs.
              Surgipedia helps clinicians convert complex surgical media into usable insights.
            </p>
            <div className="tech-stack">
              <div className="tech-category">
                <span className="tech-label">Frontend:</span>
                <span className="capsule">Figma</span>
                <span className="capsule">React</span>
                <span className="capsule">Tailwind CSS</span>
              </div>
              <div className="tech-category">
                <span className="tech-label">Backend:</span>
                <span className="capsule">Deno</span>
              </div>
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
            <div className="tech-stack">
              <div className="tech-category">
                <span className="tech-label">Frontend:</span>
                <span className="capsule">React</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Project 3 - With Carousel */}
        <Row className="mb-5 align-items-center text-start">
          <Col md={5}>
            <ImageCarousel 
              images={project3Images}
              alt="Captcha Demo"
            />
          </Col>
          <Col md={7}>
            <h4 className="mb-3">Captcha Demo</h4>
            <p>
              A simple captcha demo built with React, allowing users to select images based on categories.
            </p>
            <Link to="/captcha-demo" className="demo-btn">
              Try Demo →
            </Link>
            <div className="tech-stack">
              <div className="tech-category">
                <span className="tech-label">Frontend:</span>
                <span className="capsule">React</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Project 4 - With Carousel */}
        <Row className="mb-5 align-items-center text-start">
          <Col md={5}>
            <ImageCarousel 
              images={project4Images}
              alt="NASA Space Apps Challenge - AirQ"
            />
          </Col>
          <Col md={7}>
            <h4 className="mb-2">NASA Space Apps Challenge</h4>
            <p>
              Developed AirQ, a location-based air quality monitoring web app that integrates NASA's TEMPO satellite data with ground measurements and weather information.
              Users can select their location to view real-time pollution levels, receive health recommendations, and track air quality trends through an interactive dashboard.
            </p>
            <div className="tech-stack">
              <div className="tech-category">
                <span className="tech-label">Frontend:</span>
                <span className="capsule">React</span>
              </div>
              <div className="tech-category">
                <span className="tech-label">Backend:</span>
                <span className="capsule">Node.js</span>
                <span className="capsule">SQLite</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}