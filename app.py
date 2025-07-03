from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
from huggingface_hub import hf_hub_download
import joblib

# Load model and vectorizer from Hugging Face (v2.0)
model_path = hf_hub_download(
    repo_id="MLwithSam/tweet-sentiment-app-v2.0",
    filename="tweet_eval_sentiment_model.pkl"
)
vectorizer_path = hf_hub_download(
    repo_id="MLwithSam/tweet-sentiment-app-v2.0",
    filename="tweet_eval_vectorizer.pkl"
)

# Label mapping for sentiment classes
label_mapping = {
    0: "Negative",
    1: "Neutral",
    2: "Positive"
}

# Load model and vectorizer
with open(model_path, "rb") as f:
    model = joblib.load(f)

with open(vectorizer_path, "rb") as f:
    vectorizer = joblib.load(f)

# Initialize Flask app
app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Tweet Sentiment API v2.0 is running!"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    if not data or "text" not in data:
        return jsonify({"error": "Missing 'text' in request body"}), 400

    tweet = data["text"]

    # Predict without cleaning
    vec = vectorizer.transform([tweet])
    pred = model.predict(vec)[0]  # Integer label (0, 1, or 2)
    
    sentiment_label = label_mapping.get(pred, "Unknown")

    return jsonify({
        "prediction": int(pred),  # Numeric label
        "sentiment": sentiment_label # String label
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
