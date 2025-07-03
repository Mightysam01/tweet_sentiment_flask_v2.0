import React, { useState } from 'react';
import './App.css';

function App() {
  const [tweet, setTweet] = useState('');
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    const response = await fetch('https://tweet-sentiment-api-v2-0.onrender.com/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: tweet }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="app-container">
      <h1>Tweet Sentiment Analyzer v2.0</h1>

      <textarea
        className="tweet-input"
        rows="4"
        placeholder="Enter your tweet here..."
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      ></textarea>

      <button className="predict-button" onClick={handlePredict}>
        Analyze Sentiment
      </button>

      {result && (
        <div className="result-box">
          <h3>Prediction Result:</h3>
          <p><strong>Tweet:</strong> {tweet}</p>
          <p>
            <strong>Sentiment:</strong>{' '}
            <span className={`sentiment-badge ${result.sentiment.toLowerCase()}`}>
              {result.sentiment}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
