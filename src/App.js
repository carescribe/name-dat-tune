import './App.css';
import StartButton from './images/start-button.png';
import NameThatTune from './images/name-that-tune.png';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url("background-1.png")`, backgroundColor: "#66f7bd" }}>
        <div style={{backgroundColor: "#d93fc5", opacity: 0.9 }}>
          <img src={NameThatTune} alt="Start button" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={StartButton} alt="Start button" />
        </a>
      </header>
    </div>
  );
}

export default App;
