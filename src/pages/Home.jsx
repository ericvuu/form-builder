import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Homepage.css";
import fillFormImage from "../assets/images/fill-form.svg";
import formifyVideo from "../assets/images/formify.mp4";
import glovo from "../assets/images/icons/glovo.png";
import make from "../assets/images/icons/make.png";
import notion from "../assets/images/icons/notion.png";
import rakuten from "../assets/images/icons/rakuten.png";
import coffee from "../assets/images/icons/buy-me-a-coffee.png";
import airtable from "../assets/images/icons/icon_AIRTABLE.png"
import googleanalytics from "../assets/images/icons/icon_GOOGLE_ANALYTICS.png";
import googlesheets from "../assets/images/icons/icon_GOOGLE_SHEETS.png";
import slack from "../assets/images/icons/icon_SLACK.png";
import facebook from "../assets/images/icons/icon_FACEBOOK_PIXEL.png";

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
         <div className="partnerships">
          <h2>75% of the Fortune 500 build forms with us</h2>
          <div className="partnerships-logos">
            <div className="partnership-logo">
              <img alt="Notion logo" loading="lazy" width="104" height="40" className="notion" style={{ color: "transparent" }} src={notion} />
            </div>
            <div className="partnership-logo">
              <img alt="Make logo" loading="lazy" width="133" height="28" className="make" style={{ color: "transparent" }} src={make} />
            </div>
            <div className="partnership-logo">
              <img alt="Buy Me a Coffee logo" loading="lazy" width="146" height="32" className="buy-me-a-coffee" style={{ color: "transparent" }} src={coffee} />
            </div>
            <div className="partnership-logo">
              <img alt="Rakuten logo" loading="lazy" width="98" height="32" className="rakuten" style={{ color: "transparent" }} src={rakuten} />
            </div>
            <div className="partnership-logo">
              <img alt="Glovo logo" loading="lazy" width="83" height="28" className="glovo" style={{ color: "transparent" }} src={glovo} />
            </div>
          </div>
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
        <div className="integration">
          <h2>Integrates with all your essential apps</h2>
          <div className="integration-logos">
            <div className="integration-logo">
              <img alt="airtable logo" loading="lazy" width="50" className="airtable" style={{ color: "transparent" }}
                src={airtable} />
            </div>
            <div className="integration-logo">
              <img alt="google-analytics logo" loading="lazy" width="50" className="google-analytics" style={{ color: "transparent" }}
                src={googleanalytics} />
            </div>
            <div className="integration-logo">
              <img alt="google-sheets logo" loading="lazy" width="50" className="google-sheets" style={{
                color: "transparent" }} src={googlesheets} />
            </div>
            <div className="integration-logo">
              <img alt="slack logo" loading="lazy" width="50" className="slack" style={{ color: "transparent" }}
                src={slack} />
            </div>
            <div className="integration-logo">
              <img alt="facebook logo" loading="lazy" width="50"  className="facebook" style={{ color: "transparent" }}
                src={facebook} />
            </div>
          </div>
        </div>
           <div className="cta">
        <h2>Try building refreshingly different forms for free</h2>
        <p>Our Free Plan lets you: 1. Create unlimited forms 2. Access 3,000+ templates 3. Start getting response</p>
        <div className="cta-demo-button">
          <Link to="/demo" className="btn-black">
            Get Started
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
