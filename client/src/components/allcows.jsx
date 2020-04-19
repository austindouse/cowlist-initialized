import React from "react";
import ReactDOM from "react-dom";

const CowList = ({ allCows, changeCow }) => {
  console.log("ALLL THE FUCKING COWS");
  return (
    <div>
      Here's a list of cows:
      {allCows.map((cow) => {
        return (
          <div key={cow.cowId} onClick={() => changeCow(cow)}>
            {cow.cowName}
          </div>
        );
      })}
    </div>
  );
};

export default CowList;
