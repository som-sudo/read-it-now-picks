
import { BookRequest, BookResponse } from "@/types/book";
import { toast } from "@/components/ui/sonner";

export async function getBookRecommendations(request: BookRequest): Promise<BookResponse> {
  try {
    // In a real app, this would be an environment variable
    const API_URL = "http://localhost:5000/api/book-recommendations";
    
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`API response error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching book recommendations:", error);
    toast.error("Failed to fetch book recommendations. Please try again.");
    
    // For demo purposes, return mock data if API call fails
    return getMockBookRecommendations();
  }
}

// Mock data for testing or when API is unavailable
function getMockBookRecommendations(): BookResponse {
  return {
    books: [
      {
        id: "1",
        title: "The Silent Whispers",
        author: "Eleanor Morgan",
        description: "A thrilling mystery set in a small coastal town where secrets lurk beneath the surface and nothing is as it seems.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&h=400&auto=format&fit=crop",
      },
      {
        id: "2",
        title: "Beyond the Horizon",
        author: "James Holloway",
        description: "An epic science fiction saga exploring humanity's first contact with an advanced alien civilization and the philosophical questions it raises.",
        coverUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&h=400&auto=format&fit=crop",
      },
      {
        id: "3",
        title: "Whispers of the Heart",
        author: "Sophia Chen",
        description: "A touching romance about two people from different worlds finding connection in the most unexpected circumstances.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&h=400&auto=format&fit=crop",
      },
      {
        id: "4",
        title: "The Forgotten Kingdom",
        author: "Marcus Blackwood",
        description: "A richly detailed fantasy adventure following a young hero's journey to reclaim their birthright and save their homeland.",
        coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=300&h=400&auto=format&fit=crop",
      },
      {
        id: "5",
        title: "Mindful Living",
        author: "Dr. Sarah Johnson",
        description: "A practical self-help guide to incorporating mindfulness into everyday life for greater peace and fulfillment.",
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=300&h=400&auto=format&fit=crop",
      },
    ],
  };
}
