import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Main />
        <Menu />
      </Router>
    </div>
  );
}

export default App;
