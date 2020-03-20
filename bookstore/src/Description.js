import React from "react";
import "./App.css";
import { baseurl } from "./baseurl";
import Navbar from "./Navbar";
import axios from "axios";

class Description extends React.Component {
  constructor() {
    super();
    this.state = {
      BookDesc: ""
    };
  }
  componentDidMount() {
    var book = localStorage.getItem("BookName");
    var ses = localStorage.getItem("session");
    if (ses != 1 && ses != 2) {
      this.props.history.push("/main");
    }
    if (ses == 1 || ses == 2) {
      axios
        .get(baseurl + "Book", {
          params: {
            bookName: book
          }
        })
        .then(
          result => {
            console.log(book);
            console.log(result.data);
            var BookDesc = result.data.map((list, index) => {
              return (
                <div>
                  <h1 class="display-1">{list.BookName}</h1>
                  <h4 class="display-6">{list.Category}</h4>
                  <h4 class="display-6">{list.Author}</h4>
                  <h4 class="display-6">{list.PublishedYear}</h4>
                  <h5 class="display-6">{list.Description}</h5>
                  <h3 class="display-4">₹{list.Cost}</h3>
                </div>
              );
            });
            this.setState({ BookDesc: BookDesc });
          },
          error => {
            console.log(error);
          }
        );
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div class="jumbotron jumbotron-fluid">
          <div class="container">{this.state.BookDesc}</div>
        </div>
      </div>
    );
  }
}

export default Description;
