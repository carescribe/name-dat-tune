import StartButton from './images/start-button.png';
import NameThatTune from './images/name-that-tune.png';

function Home() {
  return (
    <header className="App-header">
      <div style={
        {
          backgroundColor: "#d93fc5",
          opacity: 0.9
        }
      }>
        <img src={NameThatTune}
          alt="Start button"/>
      </div>
      <a className="App-link" href="/round/1" rel="noopener noreferrer">
        <img src={StartButton}
          alt="Start button"/>
      </a>
    </header>
  );
}

export default Home;
