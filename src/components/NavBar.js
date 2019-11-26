import React from "react";
import { Link } from "react-router-dom";
import NewBook from "./NewBook";
import NewAuthor from "./NewAuthor";
import Books from "./BooksPage";

class NavBar extends React.Component {
  // handling new book showing state

  state = {
    NewBookShowing: false,
    NewAuthorShowing: false,
    BooksShowing: true,
    AuthorShowing: false
  };

  render() {
    const { NewBookShowing } = this.state;
    const { NewAuthorShowing } = this.state;
    const { BooksShowing } = this.state;
    return (
      <div>
        <nav
          className={
            this.state.EditMode
              ? "nav bg-danger p-2 d-block"
              : "nav bg-dark p-2 d-block"
          }
        >
          <div className="container">
            {/* book Listing container */}
            <div className="row">
              <div className="col-xl-6 col-sm-6">
                <Link
                  to="/"
                  onClick={() => {
                    this.setState({
                      BooksShowing: true,
                      NewAuthorShowing: false,
                      NewBookShowing: false
                    });
                  }}
                  className="float-left text-white text-decoration-none"
                >
                  <h3>Book Listing</h3>
                  <label
                    className={
                      this.state.EditMode ? "badge badge-danger" : "d-none"
                    }
                  >
                    Edit Mode
                  </label>
                </Link>
              </div>
              {/* buttons container */}
              <div className="col-xl-6 col-sm-6">
                <div className="row">
                  <div className="col-3">
                    {/* new book button */}
                    <Link to="/NewBook">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() =>
                          this.setState({
                            NewBookShowing: true,
                            BooksShowing: false,
                            NewAuthorShowing: false
                          })
                        }
                      >
                        New Book
                      </button>
                    </Link>
                  </div>
                  <div className="col-3">
                    <Link to="/NewAuthor">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          this.setState({
                            NewAuthorShowing: true,
                            BooksShowing: false,
                            NewBookShowing: false
                          });
                        }}
                      >
                        New Author
                      </button>
                    </Link>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-sm btn-primary">
                      New Category
                    </button>
                  </div>
                  <div className="col-3">
                    <Link to="/editmode">
                      <button
                        className={
                          this.state.EditMode
                            ? "btn btn-sm btn-success"
                            : "btn btn-sm btn-danger"
                        }
                        onClick={() => {
                          this.setState({
                            NewAuthorShowing: false,
                            BooksShowing: false,
                            NewBookShowing: false
                          });
                        }}
                      >
                        <span>
                          {" "}
                          {this.state.EditMode ? "Exit Edit Mode" : "Edit Mode"}
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* rendering new book Component */}

        {NewBookShowing ? <NewBook /> : null}
        {NewAuthorShowing ? <NewAuthor /> : null}
        {BooksShowing ? <Books /> : null}
      </div>
    );
  }
}

export default NavBar;
