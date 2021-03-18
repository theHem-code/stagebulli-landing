import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import ReactPlayer from "react-player";

const Homepage = () => {
  return (
    <div>
      <div className="bg">
        <div className="container">
          <Header />
        </div>
        <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=Wpli5-YRj6o&ab_channel=birddogsmusic" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
