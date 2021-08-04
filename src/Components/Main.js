import React, { useState } from "react";
import * as PropTypes from "prop-types";

function Main(props) {
  const {
    hashItems: { access_token },
  } = props;

  const [responseCode, setResponseCode] = useState(null);

  return (
    <div>
      <button
        className="shuffleButton"
        onClick={() => {
          fetch("https://api.spotify.com/v1/me/player/shuffle?state=true", {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
            body: "",
          })
            .then((response) => setResponseCode(response.status))
            .catch(console.error);
        }}
      >
        Activate Shuffle
      </button>
      {responseCode &&
        (responseCode === 204 ? (
          <p className="regText successText">Yay, your playback has been shuffled :)</p>
        ) : (
          <p className="regText errorText">It looks like there was an error :(</p>
        ))}
    </div>
  );
}

export default Main;

Main.propTypes = {
  hashItems: PropTypes.object.isRequired,
};
