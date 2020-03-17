import React from "react";
import "./App.css";
import BookCard from "./Card";
import AddBook from "./AddBook";
import {BrowserRouter as BR, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
      <BR>
      <Route exact path="/" component={BookCard}/>
      <Route exact path="/AddBook" component={AddBook}/>
      </BR>
      </div>
    );
  }
}

export default App;
