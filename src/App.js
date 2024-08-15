import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="hero">
      <div className="App">
        <div className="container">
          <Weather defaultCity="Katy" />
          <footer>
            This project was coded by{" "}
            <a href="https://www.linkedin.com/in/galaletsang-precious-mafoko-67a13919a/">
              Galaletsang Mafoko
            </a>{" "}
            and is open source on{" "}
            <a href="https://github.com/GalaletsangM/new-weather-react-app">
              Github
            </a>
          </footer>
        </div>
      </div>
      <video className="video-bg" autoPlay muted loop>
        <source
          src="https://cdn.pixabay.com/video/2015/10/23/1154-143492926_medium.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}
