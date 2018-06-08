import React, { Component } from "react";
import Header from "./Header";
import Clicker from "./Clicker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Clicker"
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Clicker />
        </div>
      </div>
    );
  }
}

export default App;
