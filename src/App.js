import React, { Component } from "react";
import {Header, Sidebar, Content} from "./component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}
export default App;
