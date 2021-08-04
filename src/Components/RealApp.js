import React from "react";

function RealApp() {
  return (
    <div className="RealApp">
      <p className="regText">some auth stuff I guess</p>
      <button className="regText" onClick={() => console.log("Lemme get that auth")}>
        Get auth
      </button>
    </div>
  );
}

export default RealApp;
