import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Signup from "./components/auth/Signup";
import Navbar from "./components/layout/Navbar"

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
        <div className="App">
        <Navbar></Navbar>
          <Signup> </Signup>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
