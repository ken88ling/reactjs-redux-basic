import React, { Component } from "react";
import ReactDom from "react-dom";
import User from "./User";
import Main from "./Main";

class App extends Component {
  constructor() {
    super();
  }

  changeUsername(newName) {}

  render() {
    return (
      <div className="container">
        <User changeUsername={this.changeUsername.bind(this)} />
        <Main />
      </div>
    );
  }
}

export default App;
