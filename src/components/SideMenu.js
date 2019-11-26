import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import BooksData from "../data/books.json";
import Authors from "./Authors.js";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this._onClick = this._onClick.bind(this);
  }
  // handling author click
  _onClick() {
    this.setState({
      showComponent: true
    });
  }

  render() {
    return (
      <div>
        <div className="row float-left pt-4 pr-5">
          {/* Authors column */}
          <div className="col-12 border border-primary bg-light rounded pb-5 ml-4 categ-col">
            <h5 className="categ text-white p-1 rounded bg-primary d-block">
              <span>Authors</span>
            </h5>
            <ul className="list-group text-left pl-5">
              {BooksData.authors.map((author, key, i) => {
                return (
                  <li key={key}>
                    <BrowserRouter>
                      <Link
                        to={author.id}
                        className="text-decoration-none"
                        onClick={this._onClick}
                      >
                        {author.name}
                      </Link>
                    </BrowserRouter>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* end of Authors column */}

          {/* categories column */}
          <div className="col-12 border border-primary bg-light rounded mt-5 pb-5 ml-4">
            <h5 className="categ text-white p-1 rounded bg-primary d-block">
              <span>Categories</span>
            </h5>
            <ul className="list-group text-left pl-5">
              {BooksData.categories.map((category, key) => {
                return (
                  <li key={key}>
                    <BrowserRouter>
                      <Link to={category.id} className="text-decoration-none">
                        {category.name}
                      </Link>
                    </BrowserRouter>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* end of categories column */}
        </div>
        {/* rendering authors Component */}
        {this.state.showComponent ? <Authors /> : null}
      </div>
    );
  }
}

export default SideMenu;
