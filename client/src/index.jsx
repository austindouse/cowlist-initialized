import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <div>THIS IS MY COWLIST</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
