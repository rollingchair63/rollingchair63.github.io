import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Banner } from '../components/Banner';
import project1Img from '../assets/img/project1.jpg';

export default function Home() {
    return (
        <>
            <Banner />

            {/* ——— About Me ——— */}
            <section id="about" className="about-section py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} className="text-center">
                            <h2 className="section-title mb-3">About Me</h2>
                            <p className="section-text">
                                Hello! My name is Elodie, and I'm currently a Computer Science student at SMU.
                                <br /><br /> I aspire to create fun and meaningful experiences through technology—
                                especially through websites and games. I'm passionate about how interactive design can bring people joy, much like the video games I love.
                                <br /><br /> In my spare time I'm usually
                                on a long night walk hunting for Pikmin or in Hyrule searching for Korok seeds :)
                                <br /><br /> Feel free to connect with me on
                                <a href="https://www.linkedin.com/in/elodieyyx" target="_blank" rel="noopener noreferrer" className="mx-1 text-link">
                                    LinkedIn 💬
                                </a>
                                or view more of my work on
                                <a href="https://github.com/rollingchair63" target="_blank" rel="noopener noreferrer" className="mx-1 text-link">
                                    GitHub 🛠
                                </a>!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ——— Skills ——— */}
            <section id="skills" className="skills-section py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} className="text-center">
                            <h2 className="section-title mb-3">Skills</h2>
                            <div className="skills">
                                <span className="capsule">C</span>
                                <span className="capsule">SQL</span>
                                <span className="capsule">Java</span>
                                <span className="capsule">UI/UX Design</span>
                                <span className="capsule">Figma</span>
                                <span className="capsule">JavaScript</span>
                                <span className="capsule">React</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ——— Projects ——— */}
            <section id="projects" className="projects-section py-5">
                <Container>
                    <h2 className="section-title mb-5 text-center">Projects</h2>

                    {/* Project 1 */}
                    <Row className="mb-5 align-items-center text-start">
                        <Col md={5}>
                            <img
                                src={project1Img} // replace with actual path or use import (use png if cannot)
                                alt="Surgipedia App"
                                className="img-fluid rounded shadow"
                                style={{ maxWidth: '100%', width: '220px' }} // ← set width here
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
                                src="/images/project2.jpg" // replace with actual path or use import
                                alt="Portfolio Website"
                                className="img-fluid rounded shadow"
                                style={{ maxWidth: '100%', width: '220px' }}
                            />
                        </Col>
                        <Col md={7}>
                            <h4 className="mb-2">Portfolio Website (here!)</h4>
                            <p>
                                Personal portfolio website showcasing my work and skills, with smooth scrolling, responsive layout, and themed design.
                            </p>
                            <div className="skills">
                                <span className="capsule">React</span>
                                <span className="capsule">Bootstrap</span>
                                <span className="capsule">CSS</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}