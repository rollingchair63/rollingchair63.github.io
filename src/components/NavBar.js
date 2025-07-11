import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import navIcon1 from '../assets/logos/linkedin.svg';
import navIcon2 from '../assets/logos/github.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <>
            {/* side icons */}
            <div className="side-social">
                <a href="https://linkedin.com/in/elodieyyx" aria-label="LinkedIn">
                    <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/rollingchair63" aria-label="GitHub">
                    <img src={navIcon2} alt="GitHub" />
                </a>
            </div>

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
                                to="/#about"
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
                                to="/#skills"
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
                                to="/#projects"
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