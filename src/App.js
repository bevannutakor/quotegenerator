import './App.css';
import React, { useState }  from 'react'

function App() {
  const generateQuote = () => {
  }

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("")

  return (
    <div className="App">
      <h1> Motivational Quote Generator </h1>
      <div className="quote-container">
          <h3 className="quote">{quote}</h3>
          <p className="author">{author}</p>
      </div>
      <button onClick={generateQuote} className="quote-button">Generate New Quote</button>
    </div>
  );
}

export default App;
