
from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid
import random
import logging

# Configure logging
logging.basicConfig(level=logging.INFO,
                   format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Mock book data
mock_books = [
    {
        "title": "The Silent Whispers",
        "author": "Eleanor Morgan",
        "description": "A thrilling mystery set in a small coastal town where secrets lurk beneath the surface and nothing is as it seems.",
        "coverUrl": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
        "title": "Beyond the Horizon",
        "author": "James Holloway",
        "description": "An epic science fiction saga exploring humanity's first contact with an advanced alien civilization and the philosophical questions it raises.",
        "coverUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
        "title": "Whispers of the Heart",
        "author": "Sophia Chen",
        "description": "A touching romance about two people from different worlds finding connection in the most unexpected circumstances.",
        "coverUrl": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
        "title": "The Forgotten Kingdom",
        "author": "Marcus Blackwood",
        "description": "A richly detailed fantasy adventure following a young hero's journey to reclaim their birthright and save their homeland.",
        "coverUrl": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
        "title": "Mindful Living",
        "author": "Dr. Sarah Johnson",
        "description": "A practical self-help guide to incorporating mindfulness into everyday life for greater peace and fulfillment.",
        "coverUrl": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
        "title": "The Last Detective",
        "author": "Richard Castle",
        "description": "A gritty crime novel following a jaded detective's final case before retirement, which turns out to be more personal than expected.",
        "coverUrl": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
        "title": "Starlight Dreams",
        "author": "Luna Silver",
        "description": "A young adult fantasy about a girl who discovers she can enter people's dreams and the responsibility that comes with this power.",
        "coverUrl": "https://images.unsplash.com/photo-1531901599143-df8c80d11ff1?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
        "title": "The Quantum Paradox",
        "author": "Dr. Alan Foster",
        "description": "A mind-bending exploration of quantum physics and its implications for our understanding of reality and consciousness.",
        "coverUrl": "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
        "title": "Echoes of History",
        "author": "Elizabeth Howard",
        "description": "A sweeping historical fiction spanning generations of a family against the backdrop of major world events.",
        "coverUrl": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
        "title": "The Garden of Shadows",
        "author": "Vincent Black",
        "description": "A chilling horror novel set in an isolated mansion where the plants in the garden seem to have a sinister life of their own.",
        "coverUrl": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&h=400&auto=format&fit=crop"
    }
]

@app.route('/api/book-recommendations', methods=['POST'])
def get_book_recommendations():
    try:
        # Get the request data
        data = request.get_json()
        logger.info(f"Received request with data: {data}")
        
        # In a real application, you would use these parameters to query a database
        # or recommendation engine. For this example, we'll just return random books.
        # We're using the input data to log but not actually filtering the results.
        
        # Get 5 random books from our mock data
        selected_books = random.sample(mock_books, 5)
        
        # Add unique IDs to each book
        for book in selected_books:
            book["id"] = str(uuid.uuid4())
        
        response = {"books": selected_books}
        logger.info(f"Returning response: {response}")
        
        return jsonify(response)
        
    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        return jsonify({"error": "An error occurred processing your request"}), 500

if __name__ == '__main__':
    logger.info("Starting Flask API server")
    app.run(host='0.0.0.0', port=5000, debug=True)
