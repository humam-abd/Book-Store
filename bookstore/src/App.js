import React from "react";
import "./App.css";
import BookCard from "./Card";
import Navbar from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <BookCard></BookCard>
      </div>
    );
  }
}

export default App;
