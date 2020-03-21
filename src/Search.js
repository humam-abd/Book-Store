/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { baseurl } from "./baseurl";
import axios from "axios";

class SearchBook extends React.Component {
  constructor() {
    super();
    this.state = { Books: "" };
  }

  componentDidMount() {
    var ses = localStorage.getItem("session");
    console.log(ses);
    var search = localStorage.getItem("search");
    console.log(search);
    if (ses != 1 && ses != 2) {
      this.props.history.push("/");
    }
    if (ses == 1 || ses == 2) {
      axios.post(`${baseurl}Search?bookName=${search}`).then(
        result => {
          console.log(result.data);
          var Books = result.data.map((list, index) => {
            console.log(list);
            return (
              <div class="card card_style col-lg-4" key={list.BookName}>
                <div class="card-body">
                  <h5 class="card-title">
                    <a
                      href="/Description"
                      onClick={() =>
                        localStorage.setItem("BookName", list.BookName)
                      }
                    >
                      {list.BookName}
                    </a>
                  </h5>
                  <h6 class="card-subtitle">{list.Category}</h6>
                  <h6>{list.Author}</h6>
                  <h6>₹{list.Cost}</h6>
                  <a href="#" class="card-link">
                    <button class="btn btn-outline-primary">Buy</button>
                  </a>
                </div>
              </div>
            );
          });
          this.setState({ Books: Books });
          localStorage.removeItem("search");
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert("Not a valid user");
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div class="container toppad">
          <div class="row">{this.state.Books}</div>
        </div>
      </div>
    );
  }
}
export default SearchBook;
