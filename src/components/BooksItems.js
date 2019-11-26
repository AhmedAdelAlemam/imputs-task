import React, { useState, useEffect } from "react";
import BooksData from "../data/books.json";
import AllBooks from "./AllBooks";
import Pagination from "react-bootstrap/Pagination";

const BooksItems = () => {
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

  console.log(BooksData);
  for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <AllBooks books={currentBooks} loading={loading} />
      <Pagination size="sm" className="float-right">
        <Pagination.First />
        {pageNumbers.map(number => (
          <Pagination.Item key={number} onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Last />
      </Pagination>
    </div>
  );
};
export default BooksItems;
