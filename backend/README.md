
# Book Recommendation API

This is a simple Flask API that serves book recommendations based on user preferences.

## Setup

1. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

2. Run the Flask application:
   ```
   python app.py
   ```

The API will be available at `http://localhost:5000`.

## Endpoints

### POST /api/book-recommendations

Generates book recommendations based on user preferences.

**Request Body:**

```json
{
  "interests": ["Romance", "Mystery"],
  "readingLevel": "Intermediate",
  "moods": ["Thoughtful", "Emotional"],
  "ageGroup": "Adults",
  "readingTime": "Medium reads"
}
```

**Response:**

```json
{
  "books": [
    {
      "id": "uuid-1",
      "title": "Book Title",
      "author": "Author Name",
      "description": "Book description...",
      "coverUrl": "https://example.com/cover.jpg"
    },
    ...
  ]
}
```
