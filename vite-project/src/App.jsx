import React, { Component } from "react";
import Users from "./components/Users";
import Inbox from "./components/Inbox";


class App extends Component {
  render() {
    return (
      <div className="main">
        <Users />
        <Inbox/>
      </div>
    );
  }
}

export default App;
