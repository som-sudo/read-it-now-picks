
import React from "react";
import { Book } from "@/types/book";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card className="book-card overflow-hidden h-full flex flex-col bg-white border border-bookapp-light">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg line-clamp-2">{book.title}</h3>
        <p className="text-sm text-bookapp-muted">{book.author}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm line-clamp-3 text-bookapp-text">{book.description}</p>
      </CardContent>
    </Card>
  );
};

export default BookCard;
