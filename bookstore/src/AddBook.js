import React from "react";
import "./App.css";
import axios from "axios";
import { baseurl } from "./baseurl";

class AddBook extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      author: "",
      category: "",
      description: "",
      year: "",
      cost: ""
    };
  }
  componentDidMount() {
    var ses = localStorage.getItem("session");
    if (ses != 1) {
      this.props.history.push("/main");
    }
  }
  nameChange = event => {
    this.setState({ name: event.target.value });
  };
  categoryChange = event => {
    this.setState({ category: event.target.value });
  };
  authorChange = event => {
    this.setState({ author: event.target.value });
  };
  descChange = event => {
    this.setState({ description: event.target.value });
  };
  yearChange = event => {
    this.setState({ year: event.target.value });
  };
  costChange = event => {
    this.setState({ cost: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    var ses = localStorage.getItem("session");
    console.log(ses);
    if (ses == 1) {
      axios
        .post(baseurl + "Book", {
          Name: this.state.name,
          Author: this.state.author,
          Category: this.state.category,
          Description: this.state.description,
          PublishedYear: this.state.year,
          Cost: this.state.cost
        })
        .then(
          result => {
            console.log(result);
            this.props.history.push("/main");
          },
          error => {
            console.log(error);
          }
        );
    } else {
      alert("Not allowed to Add \nNot Valid Session");
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div>
        <div class="container toppad">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="addcolor">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name of the Book"
                value={this.state.name}
                onChange={this.nameChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="addcolor">
                Category
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Category of the Book"
                value={this.state.category}
                onChange={this.categoryChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="addcolor">
                Author
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Author of the Book"
                value={this.state.author}
                onChange={this.authorChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="addcolor">
                Published Year
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Published Year of the Book"
                value={this.state.year}
                onChange={this.yearChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1" class="addcolor">
                Description
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description"
                value={this.state.description}
                onChange={this.descChange}
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="addcolor">
                Cost
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Cost of the Book"
                value={this.state.cost}
                onChange={this.costChange}
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btnalign btn-primary">
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
