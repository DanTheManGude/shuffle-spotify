import React from "react";
import { useLocation } from "react-router-dom";

function RealApp() {
  const search = useLocation().search;

  return (
    <div className="RealApp">
      <p className="regText">some auth stuff I guess</p>
      <button className="regText authButton" onClick={() => console.log("Lemme get that auth")}>
        Get auth
      </button>
    </div>
  );
}

export default RealApp;
