import React from "react";

function Home() {
  return (
    <div className="Home">
      <p className="regText">some auth stuff I guess</p>
      <button className="regText" onClick={() => console.log("Lemme get that auth")}>
        Get auth
      </button>
    </div>
  );
}

export default Home;
