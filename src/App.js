import React, { Component } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Detail from "./Detail";
import Movies from "./Movies";
import "./App.css";
//Bei's comment dkfjskdlfjskdjfskjfsdkfjdsklfj

class App extends Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Feature />
        <Detail />
        <Movies />
      </div>
    );
  }
}

export default App;
