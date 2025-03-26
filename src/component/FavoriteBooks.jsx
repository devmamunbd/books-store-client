import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

//   console.log(books);

  return (
    <div className="bg-slate-200">
      <div className="container mx-auto py-16 ">
        <BookCard books={books} headline="Best Seller Books" />
      </div>
    </div>
  );
};

export default FavoriteBooks;
