import React from "react";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaBehance, FaInstagram } from "react-icons/fa";
import profileImage from "../assets/images/image 2.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Anilkumar M</span>
        </h1>
        <h2>MERN Stack Developer</h2>
        <p>
          I create modern and responsive web applications with a focus on user
          experience and performance.
        </p>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/anil-kumar-m313" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          <FaBehance />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <br />
    </section>
  );
};

export default Hero;
