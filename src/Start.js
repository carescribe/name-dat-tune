import StartButton from './images/start-button.png';
import { Link } from "react-router-dom";


function Home() {

  const handleNameChange = (event) => {
    console.log('Name ' + event.target.value);
    localStorage.setItem('player', event.target.value);
  }

  return (
    <header className="App-header">
      <div style={
        {
          backgroundColor: "#d93fc5",
          opacity: 0.9
        }
      }>
        <input type="text" placeholder="Enter your name" onChange={handleNameChange} />
        <Link to="/round/1">
          <img src={StartButton} alt="Start button"/>
        </Link>
      </div>
    </header>
  );
}

export default Home;
