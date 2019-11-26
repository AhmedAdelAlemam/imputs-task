import React from "react";

const AllBooks = ({ books, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="row">
      <div className="col-12 mt-4">
        {/* books  container */}
        {books.map(book => {
          return (
            <div key={book.id}>
              <img
                className="img-thumbnail img-fluid border border-secondary float-left mr-3"
                src={book.image}
                alt=""
              />
              <h3 className="text-left"> {book.title} </h3>
              <p className="text-left">
                {`${
                  book.description.length > 200
                    ? `${book.description.slice(0, 410)}.`
                    : ""
                }`}
              </p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
