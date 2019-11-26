import React from "react";
import SideMenu from "./SideMenu";
import BooksItems from "./BooksItems";

class Books extends React.Component {
  render() {
    return (
      <div className="row alert-dark fixed-padding">
        <div className="col bg-light">
          <SideMenu />
          <BooksItems />
        </div>
      </div>
    );
  }
}

export default Books;
