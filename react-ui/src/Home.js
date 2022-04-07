import StartButton from './images/start-button.png';
import NameThatTune from './images/name-that-tune.png';
import { Link } from "react-router-dom";


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
      <Link to="/start">
        <img src={StartButton} alt="Start button"/>
      </Link>
    </header>
  );
}

export default Home;
