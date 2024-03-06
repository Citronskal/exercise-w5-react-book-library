import React from "react";
import Title from "./Book component/Title";
import Author from "./Book component/Auther";
import BookInfo from "./Book component/BookInfo";
import Coverimag from "./Book component/Coverimag";

function Book({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.title} className="book">
          <Coverimag src={book.image} alt={book.title} />
          <Title title={book.title} />
          <Author author={book.author} />
          <BookInfo {...book} />
        </div>
      ))}
    </div>
  );
}

export default Book;
