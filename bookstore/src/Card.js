/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";

class BookCard extends React.Component {
  render() {
    return (
      <div class="card card_style">
        <div class="card-body">
          <h5 class="card-title">Bookname</h5>
          <h6 class="card-subtitle mb-2 text-muted">Category</h6>
          <h6>Author</h6>
          <h6>Cost</h6>
          <a href="#" class="card-link">
          <button class="btn btn-outline-primary">Buy</button>
          </a>
        </div>
      </div>
    );
  }
}
export default BookCard;
