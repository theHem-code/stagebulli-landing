import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import ReactPlayer from "react-player";
import CookieBanner from 'react-cookie-banner';

const Homepage = () => {
  return (
    <div>
      <div className="bg">
        <div className="container">
          <Header />
        </div>
        <div className="video-wrapper">
          <ReactPlayer url="https://www.youtube.com/watch?v=Wpli5-YRj6o&ab_channel=birddogsmusic" />
        </div>
      </div>
      <Footer />
      <CookieBanner
      display={true}
      styles={{
        banner: { backgroundColor: 'rgba(60, 60, 60, 0.8)' },
        message: { fontWeight: 400 }
      }}  
      message="Diese Website nutzt sogenannte Cookies. Wenn Sie die Website weiter nutzen, stimmen Sie der Verwendung von Cookies zu."
      onAccept={() => {}}
      buttonMessage='Okay'
      dismissOnScroll={false}
      cookie="user-has-accepted-cookies" />
    </div>
  );
};

export default Homepage;
