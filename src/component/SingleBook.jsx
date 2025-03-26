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

  console.log(book);
  return (
    <div>
        
    </div>
  );
};

export default SingleBook;
