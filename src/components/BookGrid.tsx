
import React from "react";
import { Book } from "@/types/book";
import BookCard from "./BookCard";

interface BookGridProps {
  books: Book[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl md:text-2xl font-bold mb-8 text-bookapp-primary">
        Great Book Recommendations!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
