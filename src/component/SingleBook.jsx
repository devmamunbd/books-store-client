import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/single/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, [id]);

//   console.log(book);
  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        {book ? (
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-80 object-cover rounded-md mb-6"
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {book.title}
            </h2>
            <p className="text-gray-600 mb-4">by {book.author}</p>
            <p className="text-gray-700">{book.description}</p>
            <div className="mt-4">
              <p className="text-lg font-semibold">Topic: {book.genre}</p>
              <p className="text-lg">Published Year: {book.publishedYear}</p>
              <p className="text-lg">Price: ${book.price}</p>
              <p className="text-lg">Rating: {book.rating}⭐</p>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer">
              Buy Now
            </button>
          </div>
        ) : (
          <p className="text-center text-red-500">Book not found!</p>
        )}
      </div>
    </div>
  );
};

export default SingleBook;
