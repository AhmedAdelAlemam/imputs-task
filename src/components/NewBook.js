import React from "react";
import SideMenu from "./SideMenu";

class NewBook extends React.Component {
  render() {
    return (
      <div className="row alert-dark fixed-padding">
        <div className="col bg-light">
          {/* SideMenu Component  */}
          <SideMenu />

          {/* new book container */}
          <div className="row">
            <div className="col-12">
              <h4 className="text-left pt-4 pr-4 font-weight-bold">
                Add New Book
              </h4>
            </div>
            <div className="col">
              <form className="mt-3">
                {/* input title */}
                <div className="form-group text-left">
                  <label htmlFor="title" className="text-muted">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder=""
                  />
                </div>
                {/* category selector  */}
                <div className="row text-left">
                  <div className="form-group col">
                    <label htmlFor="category" className="text-muted">
                      Category
                    </label>
                    <select className="form-control" id="category">
                      <option>Select Category</option>
                      <option>Select Category</option>
                      <option>Select Category</option>
                      <option>Select Category</option>
                      <option>Select Category</option>
                    </select>
                  </div>
                  {/* Author selector */}
                  <div className="form-group col">
                    <label htmlFor="Author" className="text-muted">
                      Author
                    </label>
                    <select className="form-control" id="Author">
                      <option>Select Author</option>
                      <option>Select Author</option>
                      <option>Select Author</option>
                      <option>Select Author</option>
                      <option>Select Author</option>
                    </select>
                  </div>
                </div>
                {/* Description textarea */}
                <div className="form-group text-left">
                  <label htmlFor="Description" className="text-muted">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="Description"
                    rows="8"
                  ></textarea>
                </div>
                {/* ISBN input */}
                <div className="form-group text-left">
                  <label htmlFor="ISBN" className="text-muted">
                    ISBN
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ISBN"
                    placeholder=""
                  />
                </div>
                {/* number of pages input */}
                <div className="row">
                  <div className="form-group text-left col">
                    <label htmlFor="No. of pages" className="text-muted">
                      No. of pages
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="No. of pages"
                      placeholder="0"
                    />
                  </div>
                  {/* year Published input  */}
                  <div className="form-group text-left col">
                    <label htmlFor="Year Published" className="text-muted">
                      Year Published
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Year Published"
                      placeholder="2003"
                    />
                  </div>
                </div>
                {/* img URL input */}
                <div className="form-group text-left">
                  <label htmlFor="Image URL" className="text-muted">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Image URL"
                    placeholder=""
                  />
                </div>
              </form>
              {/* save & Cancel btns */}
              <div className="row text-left">
                <div className="col">
                  <button className="btn btn-primary px-5 mr-3">Save</button>
                  <button className="btn btn-light px-3 border">Cancel</button>
                </div>
                {/* empty col to take the half of the row */}
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewBook;
