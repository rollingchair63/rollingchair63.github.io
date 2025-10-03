import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
// import project1Img from '../../assets/img/project1.jpg';
import { useLocation } from 'react-router-dom'
import "./Home.css";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        // Scroll to hash anchor after page loads
        if (location.hash) {
            setTimeout(() => {
                const element = document.querySelector(location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

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

            <Skills />

            <Projects />
        </>
    );
}