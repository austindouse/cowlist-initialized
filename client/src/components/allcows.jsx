import React from "react";
import ReactDOM from "react-dom";

const CowList = ({ cowList, selectCow }) => {
  <div>
    HERE'S SOME COWS
    {cowList.map((cow) => {
      return (
        <div key={cow.id} onClick={() => selectCow(cow)}>
          {cow.name}
        </div>
      );
    })}
  </div>;
};

export default CowList;
