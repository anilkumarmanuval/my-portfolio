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
        <a href="FaInstagram://linkedin.com/anil-kumar-m313">
          <FaLinkedin />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://behance.net">
          <FaBehance />
        </a>
        <a href="https://instagram.com">
        <FaInstagram />
</a>
      </div>
      <br></br>
      <button className="contact-btn" href="/contacts">Contact</button>

    </section>
  );
};

export default Hero;
