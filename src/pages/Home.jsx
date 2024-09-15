import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Homepage.css";
import fillFormImage from "../assets/images/fill-form.svg";
import formifyVideo from "../assets/images/formify.mp4";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <h1>Simplify Form Creation with Our No-Code Solution</h1>
            <p>
              Creating forms has never been easier. With our intuitive
              drag-and-drop interface, you can design custom forms in minutes,
              without any coding experience required.
            </p>
            <div className="hero-demo-button">
              <Link to="/demo" className="btn-black">
                Demo
              </Link>
            </div>
          </div>
          <img className="hero-image" src={fillFormImage} alt="filling form" />
        </div>
        <div className="browser-window">
          <div className="browser-bar">
            <div className="browser-buttons">
              <div className="browser-button"></div>
              <div className="browser-button"></div>
              <div className="browser-button"></div>
            </div>
          </div>
          <div>
            <video playsInline autoPlay muted loop width="100%">
              <source src={formifyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
