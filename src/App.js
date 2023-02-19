import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Motivational Quote Generator </h1>
      <div className="quote-container">
          <h3 className="quote">"The future belongs to those who believe in the beauty of their dreams."</h3>
          <p className="author">- Eleanor Roosevelt</p>
      </div>
      <button className="quote-button">Generate New Quote</button>
    </div>
  );
}

export default App;
