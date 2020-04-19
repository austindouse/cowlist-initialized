import React from "react";
import ReactDOM from "react-dom";

const CurrentCow = ({ currentCow }) => {
  return (
    <div>
      <div>Current Cow: {currentCow.cowName}</div>
    </div>
  );
};

export default CurrentCow;
