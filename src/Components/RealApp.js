import React from "react";
import { useLocation } from "react-router-dom";

const requestAuth = () => {
  console.log(
    `https://accounts.spotify.com/authorize?client_id=ffe90abde69148bbbd6e4a1e372c0097&redirect_uri=https:%2F%2Fdangude.com%2Fshuffle-spotify%2F&scope=user-read-private%20user-read-email&response_type=token&state=20210212`
  );
};

function RealApp() {
  const search = useLocation().search;

  return (
    <div className="RealApp">
      <p className="regText">some auth stuff I guess</p>
      <button className="regText authButton" onClick={requestAuth}>
        Get auth
      </button>
    </div>
  );
}

export default RealApp;
