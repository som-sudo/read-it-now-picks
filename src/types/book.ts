
export type Interest = 
  | "Romance" 
  | "Mystery" 
  | "Thriller" 
  | "Crime" 
  | "Fantasy" 
  | "Science Fiction" 
  | "Historical Fiction" 
  | "Horror" 
  | "Self-Help" 
  | "Biography";

export type ReadingLevel = "Beginner" | "Intermediate" | "Advanced";

export type Mood = 
  | "Thoughtful" 
  | "Lighthearted" 
  | "Dark" 
  | "Inspirational" 
  | "Fantastical" 
  | "Intellectual" 
  | "Emotional" 
  | "Relaxed";

export type AgeGroup = "Kids" | "Teens" | "Adults" | "Seniors";

export type ReadingTime = "Short stories" | "Medium reads" | "Epic sagas";

export interface BookRequest {
  interests: Interest[];
  readingLevel: ReadingLevel;
  moods: Mood[];
  ageGroup: AgeGroup;
  readingTime: ReadingTime;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
}

export interface BookResponse {
  books: Book[];
}
