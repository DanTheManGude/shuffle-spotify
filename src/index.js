import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";
//import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <h1 id="title">Shuffle Spotify</h1>
    <h3 id="subtitle">Creates a shuffled playlist of what you are listening to on Spotify</h3>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

console.log(`Git hash: ${process.env.REACT_APP_VERSION}`);

//reportWebVitals();
