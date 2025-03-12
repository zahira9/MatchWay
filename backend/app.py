from flask import Flask, jsonify, request
from flask_cors import CORS
from services.itinerary_service import optimize_route
from services.recommendation_service import get_recommendations
from services.weather_service import get_weather_updates
from services.chatbot_service import get_chat_response

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Home route
@app.route('/')
def home():
    return "Welcome to MatchWay Backend!"

# Itinerary optimization endpoint
@app.route('/api/optimize-route', methods=['POST'])
def optimize_route_endpoint():
    data = request.json
    start = data.get('start')
    end = data.get('end')
    result = optimize_route(start, end)
    return jsonify(result)

# Hotel and restaurant recommendations endpoint
@app.route('/api/recommendations', methods=['POST'])
def recommendations_endpoint():
    data = request.json
    budget = data.get('budget')
    preferences = data.get('preferences')
    result = get_recommendations(budget, preferences)
    return jsonify(result)

# Weather updates endpoint
@app.route('/api/weather-updates', methods=['GET'])
def weather_updates_endpoint():
    result = get_weather_updates()
    return jsonify(result)

# Chatbot endpoint
@app.route('/api/chat', methods=['POST'])
def chat_endpoint():
    data = request.json
    user_message = data.get('message')
    result = get_chat_response(user_message)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)