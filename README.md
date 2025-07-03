# Tweet Sentiment Analyzer v2.0

An improved and production-ready Tweet Sentiment Analyzer that classifies tweets into **Positive**, **Neutral**, or **Negative** sentiments using a fine-tuned machine learning model trained on the **TweetEval** benchmark dataset.

This version includes:
- Improved sentiment model trained on a large, high-quality dataset.
- Backend hosted on **Render**, using Flask & Hugging Face model hosting.
- Clean, modern React.js frontend for user interaction.
- End-to-end sentiment analysis via REST API.
- See older version [here] (https://github.com/Mightysam01/tweet_sentiment_flask)

---

## Demo Links

| Component | URL |
|-----------|-----|
| Frontend (React) | Live Demo (Vercel) [https://tweet-sentiment-flask-v2-0.vercel.app/](https://tweet-sentiment-flask-v2-0.vercel.app/) |
| Backend (Flask API) | API Endpoint [https://tweet-sentiment-api-v2-0.onrender.com](https://tweet-sentiment-api-v2-0.onrender.com/predict) |

---

## Model Improvements (v2.0)

| Feature                     | v1.0 (Initial Version)         | v2.0 (Improved Version)         |
|-----------------------------|--------------------------------|--------------------------------|
| Dataset                     | Small manually collected       | TweetEval (Benchmark Dataset)   |
| Model                       | Logistic Regression + TF-IDF   | Logistic Regression + TF-IDF   |
| Classes                     | 3 (Positive, Neutral, Negative) | 3 (Positive, Neutral, Negative) |
| Accuracy                    | Lower (~60%)                   | Improved (better accuracy)      |
| Model Hosting               | Local pickle files              | Hugging Face Hub (Auto-download)|
| Backend                     | Flask                          | Flask + Hugging Face Integration|
| Frontend                    | Simple                        | Fully redesigned, modern look  |

---

## Project Structure

tweet_sentiment_flask/
│
├── react_frontend/ # React.js frontend (v2.0)
│ ├── src/
│ └── package.json
│
├── src/ # Flask backend (v2.0)
│ ├── app.py # Flask app with API routes
│ ├── requirements.txt
│
├── .gitignore
├── README.md
└── v2_0TweetsSentiment.ipynb # Model training notebook

---

## Credits

- ML model and API developed by [MLwithSam](https://huggingface.co/MLwithSam)
- Frontend hosted on [Vercel](https://tweet-sentiment-flask-v2-0.vercel.app/)
- Backend hosted on [Render](https://tweet-sentiment-api-v2-0.onrender.com)
- Model files hosted on [Hugging Face Hub](https://huggingface.co/MLwithSam/tweet-sentiment-app-v2.0/tree/main)
