import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              Hello! I’m Elodie, a web developer with a passion for building …
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};