import React from "react";
import ReactDOM from "react-dom";
// import allCows from "./componenents/allCows";
// import currentCow from "./componenents/currentCow";
import controllers from "./controllers";
import AllCows from "./components/allcows";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCows: { cowId: "", name: "", description: "" },
      currentCow: { cowId: "", name: "", description: "" },
    };

    this.selectCow = this.selectCow.bind(this);
  }
  componentDidMount() {
    // add all cows here
    controllers
      .getCows()
      .then(({ data }) => {
        console.log(data);
        this.setState({ allCows: data, currentCow: data[0] });
      })
      .catch((Err) => {
        console.log(Err);
      });
  }

  selectCow() {
    this.setState({ currentCow: selectedCow });
  }
  render() {
    console.log("STATE", this.state);
    return (
      <div>
        <div>
          ALL THE COWS
          <AllCows cowList={this.state.allCows} selectCow={this.selectCow} />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
