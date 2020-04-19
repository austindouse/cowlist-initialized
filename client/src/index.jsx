import React from "react";
import ReactDOM from "react-dom";
// import currentCow from "./componenents/currentCow";
import controllers from "./controllers";
import AllCows from "./components/allcows";
import CurrentCow from "./components/currentCow";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCows: [],
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

  selectCow(selectedCow) {
    this.setState({ currentCow: selectedCow });
  }

  render() {
    console.log("STATE", this.state.allCows);
    return (
      <div>
        <div>
          ALL THE COWS
          <AllCows allCows={this.state.allCows} changeCow={this.selectCow} />
        </div>
        <div>
          <CurrentCow currentCow={this.state.currentCow} />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
