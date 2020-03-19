/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";

class Navbar extends React.Component {
  logOut=()=>{
    localStorage.removeItem("session");
  }
  componentDidMount() {}

  render() {
    var ses = localStorage.getItem("session");
    if(ses == 1){
    var add = <li class="nav-item">
    <a class="nav-link" href="/AddBook">
      <button className="btn btn-primary">Add Book</button>
    </a>
  </li>
    }
    
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Book-Store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item nav_ul">
                <a class="nav-link" href="#">
                  AllBooks
                </a>
              </li>
              <li class="nav-item nav_ul">
                <a class="nav-link" href="#">
                  Free
                </a>
              </li>
              <li class="nav-item dropdown nav_ul">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Fiction
                  </a>
                  <a class="dropdown-item" href="#">
                    Biography
                  </a>
                  <a class="dropdown-item" href="#">
                    Autobiography
                  </a>
                  <a class="dropdown-item" href="#">
                    Science-Fiction
                  </a>
                </div>
              </li>
              {add}
              <li>
                <a href="/"><button onClick={this.logOut} class="btn btn-secondary nav_ul">Logout</button></a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
