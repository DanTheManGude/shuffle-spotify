import React from "react";
import * as PropTypes from "prop-types";

function Main(props) {
  const {
    hashItems: { access_token },
  } = props;

  return (
    <button className="shuffleButton" onClick={() => {}}>
      Activate Shuffle
    </button>
  );
}

export default Main;

Main.propTypes = {
  hashItems: PropTypes.object.isRequired,
};
