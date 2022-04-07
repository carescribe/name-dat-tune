import StartButton from './images/start-button.png';
import NameThatTune from './images/name-that-tune.png';
import { Link } from "react-router-dom";
import GifStack from './lib/GifStack';
import Container from './lib/Container';

function Home() {
  return (
    <header className="App-header">

      <GifStack />

      <Container>
        <img src={NameThatTune}
          alt="Start button"/>
      
        <Link to="/start">
          <img src={StartButton} alt="Start button"/>
        </Link>
      </Container>
    </header>
  );
}

export default Home;
