import React from "react";
import Routes from "./Routes.js";

function App() {
  return (
    <div className="App">
      <h1 id="title">Shuffle Spotify</h1>
      <h3 id="subtitle">Creates a shuffled playlist of what you are listening to on Spotify</h3>
      <Routes />
    </div>
  );
}

export default App;
