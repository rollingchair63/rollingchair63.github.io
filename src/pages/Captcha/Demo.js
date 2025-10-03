import React from 'react';
import { Container } from 'react-bootstrap';
import { Captcha } from './Captcha';
import './Demo.css';

export default function Demo() {
  const handleSuccess = () => {
    console.log('CAPTCHA verified successfully!');
  };

  return (
    <section className="captcha-demo-section py-5">
      <Container>
        <h2 className="text-center mb-4">CAPTCHA Challenge</h2>
        <p className="text-center mb-4">
          Select all images matching the category shown below!
        </p>
        <Captcha onSuccess={handleSuccess} />
      </Container>
    </section>
  );
}