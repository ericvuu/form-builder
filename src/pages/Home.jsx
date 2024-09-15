import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Homepage.css";
import fillFormImage from "../assets/images/fill-form.svg";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Simplify Form Creation with Our No-Code Solution</h1>
        <p>
          Creating forms has never been easier. With our intuitive drag-and-drop
          interface, you can design custom forms in minutes, without any coding
          experience required.
        </p>
        <div className="hero-demo-button">
          <Link to="/demo" className="btn-black">
            Demo
          </Link>
        </div>
      </div>
      <img className="hero-image" src={fillFormImage} alt="filling form" />
    </div>
  );
};

export default Home;
