import React from "react";
import "./DestinationPage.css";
import DestinationPageVideo from "./resources/destination_page_background_video.mp4";

export const DestinationPage = () => {
  return (
    <div className="header">
      <video autoPlay loop muted>
        <source src={DestinationPageVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Provo, Turks and Caicos Islands</h1>
        <br />
        <p>This is the place for you! Based on your answers</p>
        <button>Discover more</button>
      </div>
    </div>
  );
};
export default DestinationPage;
