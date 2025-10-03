import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import "./Banner.css";

export default function Banner() {
    const [isLoaded, setIsLoaded] = useState(false);

    // trigger the loaded class as soon as we mount
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section
            className={`banner${isLoaded ? " loaded" : ""}`}
            id="home"
        >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="hero-text">
                            hello!
                        </h1>
                        <p
                            className="hero-text"
                            style={{ transitionDelay: "0.3s" }}
                        >
                            welcome :D
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img
                            src={headerImg}
                            alt="Header Img"
                            className="hero-img"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};