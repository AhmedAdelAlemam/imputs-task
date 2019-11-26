import React, { useState, useEffect } from "react";
import BooksData from "../data/books.json";

const Authors = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const res = BooksData.books;
      setBooks(res);
      setLoading(false);
    };
    getBooks();
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="list-group text-left pl-5 pt-4">
      {/* maping authors */}
      {BooksData.authors.map((author, key) => {
        return (
          <div key={key}>
            <h4 className="font-weight-bold">{author.name}</h4>
            <h6 className="font-weight-bold">-- {author.jobTitle}</h6>
            <p>{author.bio}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Authors;
