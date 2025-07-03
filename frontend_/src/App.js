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

  const sentimentLabels = {
    0: 'Negative',
    1: 'Neutral',
    2: 'Positive',
  };

  return (
    <div className="app-container">
      <h1>Tweet Sentiment Analyzer v2.0</h1>

      <p className="description">
        Analyze the sentiment of any tweet instantly using our advanced sentiment analysis model,
        trained on the <strong>TweetEval Sentiment Dataset</strong>. This tool predicts whether a
        tweet expresses a <strong>positive</strong>, <strong>neutral</strong>, or <strong>negative</strong> sentiment.
      </p>

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
            <span className={`sentiment-badge ${sentimentLabels[result.prediction].toLowerCase()}`}>
              {sentimentLabels[result.prediction]}
            </span>
          </p>
        </div>
      )}

      <div className="examples-section">
        <h2>Example Tweets You Can Try:</h2>
        <ul>
          <li><strong>Positive:</strong> "I love this new phone, it's amazing!"</li>
          <li><strong>Neutral:</strong> "I just finished my lunch."</li>
          <li><strong>Negative:</strong> "I am really disappointed with the service."</li>
        </ul>
        <p>Simply copy and paste one of the examples above to see the model in action.</p>
      </div>

      <div className="about-section">
        <h2>About This Model</h2>
        <p>
          This v2.0 model is trained on the <strong>TweetEval Sentiment Dataset</strong>, a large-scale Twitter sentiment benchmark dataset.
          It significantly improves upon v1.0 by offering better accuracy and robustness on real-world tweets.
        </p>
        <p><strong>Key Improvements Over v1.0:</strong></p>
        <ul>
          <li>More diverse training data from TweetEval</li>
          <li>Enhanced accuracy in predicting tweet sentiment</li>
          <li>Removes complex preprocessing—works with natural tweets</li>
        </ul>
        <p>
          You can also explore and compare the original version (v1.0) here:{' '}
          <a href="https://tweet-sentiment-flask.vercel.app/" target="_blank" rel="noopener noreferrer">
            Tweet Sentiment Analyzer v1.0
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
