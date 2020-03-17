import React from "react";
import "./App.css";

class AddBook extends React.Component {
  render() {
    return (
      <div>
      <div class="container toppad">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1" class="addcolor">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Name of the Book"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1" class="addcolor">Category</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Category of the Book"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1" class="addcolor">Author</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Author of the Book"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1" class="addcolor">Published Year</label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Published Year of the Book"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1" class="addcolor">Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder = "Description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1" class="addcolor">Cost</label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Cost of the Book"
            />
          </div>
          <div class="form-group">
            <button class="btn btnalign btn-primary">
                Save
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
export default AddBook;
