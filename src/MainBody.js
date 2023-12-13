// MainBody.js
import React from "react";
import "./MainBody.css";
import { Link } from "react-router-dom";
import BackGroundVideo from "./resources/home_page_background_video.mp4";

export const MainBody = () => {
  return (
    <main className="main-body">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={BackGroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <h1>Find your dream destination</h1>
        <p>Explore and discover our hidden gem places that are unique.</p>
        <Link to="/quiz-page">
          <button>Let's go</button>
        </Link>
      </div>
    </main>
  );
};

export default MainBody;
