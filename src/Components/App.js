import React from "react";
import Main from "./Main";

const requestAuth = () => {
  window.location.href = `https://accounts.spotify.com/authorize?client_id=ffe90abde69148bbbd6e4a1e372c0097&redirect_uri=https:%2F%2Fdangude.com%2Fshuffle-spotify&scope=user-read-private%20user-read-email%20user-modify-playback-state&response_type=token&state=20210212`;
};

const calculateAuthorization = () => {
  console.log(window.location);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  if (params.hasOwnProperty("error")) {
    return -1;
  }

  if (!window.location.hash) {
    return 0;
  }

  const hashItems = window.location.hash
    .substr(1)
    .split("&")
    .reduce((acc, element) => {
      const parts = element.split("=");
      acc[parts[0]] = parts[1];
      return acc;
    }, {});

  if (hashItems.hasOwnProperty("access_token")) {
    return hashItems;
  }
};

function App() {
  const authorization = calculateAuthorization();

  if (authorization === -1) {
    return <p className="errorText">Sorry, it looks like an error occurred</p>;
  }

  if (authorization === 0) {
    return (
      <div>
        <p className="regText">Please login below to use the app</p>
        <button className="regText authButton" onClick={requestAuth}>
          Login
        </button>
      </div>
    );
  }

  return <Main hashItems={authorization} />;
}

export default App;
