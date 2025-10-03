import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import "./NavBar.css";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
      
          const aboutSection = document.getElementById('about');
          const skillsSection = document.getElementById('skills');
          const projectsSection = document.getElementById('projects');
      
          const offset = 200; // tweak this as needed to detect when a section is "in view"
      
          if (projectsSection && scrollPosition >= projectsSection.offsetTop - offset) {
            setActiveLink('projects');
          } else if (skillsSection && scrollPosition >= skillsSection.offsetTop - offset) {
            setActiveLink('skills');
          } else if (aboutSection && scrollPosition >= aboutSection.offsetTop - offset) {
            setActiveLink('about');
          } else {
            setActiveLink(''); // nothing active at the top
          }
      
          setScrolled(scrollPosition > 50);
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <>
            {/* main navbar */}
            <Navbar
                expand="lg"
                fixed="top"
                expanded={expanded}
                onToggle={() => setExpanded(!expanded)}
                className={`top-nav${scrolled ? " scrolled" : ""}`}
            >
                <Container>
                    {/* brand/logo */}
                    <Navbar.Brand
                        as={HashLink}
                        to="/#"
                        className="logo"
                        onClick={() => {
                            onUpdateActiveLink("about");
                            setExpanded(false);
                        }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: '40px', width: 'auto' }}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link
                                as={HashLink}
                                to="#about"
                                smooth
                                className={`navbar-link${activeLink === "about" ? " active" : ""}`}
                                onClick={() => {
                                    onUpdateActiveLink("about");
                                    setExpanded(false);
                                }}
                            >
                                About Me
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="#skills"
                                smooth
                                className={`navbar-link${activeLink === "skills" ? " active" : ""}`}
                                onClick={() => {
                                    onUpdateActiveLink("skills");
                                    setExpanded(false);
                                }}
                            >
                                Skills
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="#projects"
                                smooth
                                className={`navbar-link${activeLink === "projects" ? " active" : ""}`}
                                onClick={() => {
                                    onUpdateActiveLink("projects");
                                    setExpanded(false);
                                }}
                            >
                                Projects
                            </Nav.Link>

                            <Nav.Link
                                as={Link}
                                to="/resume"
                                className="resume-btn"
                                onClick={() => {
                                    onUpdateActiveLink("");
                                    setExpanded(false);
                                }}
                            >
                                Resume
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};