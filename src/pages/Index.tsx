
import React, { useState } from "react";
import BookFilterForm from "@/components/BookFilterForm";
import BookGrid from "@/components/BookGrid";
import { BookRequest, BookResponse, Book } from "@/types/book";
import { getBookRecommendations } from "@/services/bookService";
import { toast } from "sonner";

const Index: React.FC = () => {
  const [formData, setFormData] = useState<BookRequest>({
    interests: [],
    readingLevel: "Intermediate",
    moods: [],
    ageGroup: "Adults",
    readingTime: "Medium reads",
  });

  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerateRecommendations = async () => {
    // Basic validation
    if (!formData.readingLevel || !formData.ageGroup || !formData.readingTime) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsLoading(true);

    try {
      const response = await getBookRecommendations(formData);
      setBooks(response.books);
      setHasGenerated(true);
      toast.success("Book recommendations generated successfully!");
    } catch (error) {
      console.error("Error generating recommendations:", error);
      toast.error("Failed to generate recommendations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bookapp-primary mb-4">
            Are you ready to start?
          </h1>
          <p className="text-lg text-bookapp-muted max-w-3xl mx-auto">
            Discover your next favorite book with our personalized recommendation engine.
            Fill in your preferences below and let us suggest the perfect reads for you.
          </p>
        </div>

        <BookFilterForm
          formData={formData}
          onChange={setFormData}
          onSubmit={handleGenerateRecommendations}
          isLoading={isLoading}
        />

        {isLoading && (
          <div className="flex justify-center my-12">
            <div className="animate-pulse text-lg text-bookapp-accent">
              Finding the perfect books for you...
            </div>
          </div>
        )}

        {hasGenerated && books.length > 0 && !isLoading && (
          <BookGrid books={books} />
        )}

        {hasGenerated && books.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-lg text-bookapp-muted">
              No books found matching your criteria. Try adjusting your preferences.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
