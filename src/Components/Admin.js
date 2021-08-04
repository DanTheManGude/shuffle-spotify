import React from "react";

function Admin() {
  return (
    <div className="Admin">
      <p className="adminText">Git hash: {process.env.REACT_APP_VERSION}</p>
    </div>
  );
}

export default Admin;
