import React from "react";
import { Link } from "react-router";

const BookCard = ({ books, headline }) => {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-center md:text-4xl font-bold text-black mb-8 uppercase">
          {headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book, index) => (
            <Link key={index} to={`book/${book._id}`} className="">
                <div className="bg-white shadow-md rounded-md p-4">
                    <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-60 object-cover rounded-md"
                    />
                    <div className="mt-4">
                    <h3 className="text-xl font-bold text-black">{book.title}</h3>
                    <p className="text-gray-500">Author: {book.author}</p>
                    <p className="text-gray-500">Price: ${book.price}</p>
                    </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
