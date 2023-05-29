import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from './tree.png'; // Import the logo image
import './LandPage.css';

import Typed from 'typed.js';

const LandPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const typedRef = useRef(null);
  const secondLineRef = useRef(null);
  const glowingLinesRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to the Computer Science Internship Hub",
      ],
      typeSpeed: 80,
      backSpeed: 0, // Set backSpeed to 0 to prevent deleting the previous line
      loop: false,
      showCursor: false,
      onComplete: () => {
        if (secondLineRef.current) {
          const options2 = {
            strings: [
              "Discover the resources and guidance you need to succeed in your CS internship journey"
            ],
            typeSpeed: 80,
            backSpeed: 0,
            loop: false,
            showCursor: false,
          };
          const typed2 = new Typed(secondLineRef.current, options2);

          if (glowingLinesRef.current) {
            glowingLinesRef.current.style.top = secondLineRef.current.offsetHeight + 'px';
          }
        }
      }
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="land-page">
      <Helmet>
        <title> CS Internship Hub</title>
      </Helmet>

      <header>
        <div className="logo">
        <a href="/"><img src={logo} alt="Logo" className="logo-image" /></a>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="">Internships</a>
          <a href="#">Internship Steps</a>
          <a href="#">Black Companies</a>
          <a href="#">Extra</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            <span ref={typedRef}></span>
          </h1>
          <p ref={secondLineRef}></p>
          <div className="glowing-lines" ref={glowingLinesRef}></div>
        </div>
      </section>

      {/* Add more sections and components here */}

      <div className="foot">
        <p>&copy; 2023 Ultimate CS Internship Hub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LandPage;
