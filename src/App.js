import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desktop applications using Electron with React JS by Ankit Dhawan
        </p>
        <a
          className="App-link"
          href="https://github.com/ad-dhawan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on Github
        </a>
      </header>
    </div>
  );
}

export default App;
