import React from "react";
import video from "../assets/dog-stare.mp4";
import { Navigation } from "./Navigation";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="overlay"></div>
      <video
        playsInLine="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={video} type="video/mp4" />
      </video>
      <Navigation />
      <div className="container-o">
        <div className="">
          <div className="w-100 text-white ">
            <h1 className="main-title w-100 display-3">ADOPT ME</h1>
            <p className="lead mb-0">Connecting you with your next companion</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
