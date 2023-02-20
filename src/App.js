import './App.css';
import React, { useState }  from 'react'
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const generateQuote = async () => {
    let arrayOfQuotes = [];//quotes
    try{
      const quotesData = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = quotesData.data;
      console.log(arrayOfQuotes);
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error){
      console.log(error)
    }
  }


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
