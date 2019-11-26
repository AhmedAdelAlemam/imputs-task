import React from "react";
import SideMenu from "./SideMenu";

class NewAuthor extends React.Component {
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
                Add New Author
              </h4>
            </div>
            <div className="col">
              <form className="mt-3">
                {/* input title */}
                <div className="form-group text-left">
                  <label htmlFor="title" className="text-muted">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder=""
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="title" className="text-muted">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder=""
                  />
                </div>

                {/* Description textarea */}
                <div className="form-group text-left">
                  <label htmlFor="Description" className="text-muted">
                    Bio
                  </label>
                  <textarea
                    className="form-control"
                    id="Description"
                    rows="8"
                  ></textarea>
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

export default NewAuthor;
