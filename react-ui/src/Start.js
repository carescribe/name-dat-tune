import { Link } from "react-router-dom";
import JoinGame from './images/join-game.png';
import WhatIsYourName from './images/what-is-your-name.png';
import Button from "./lib/Button";
import Container from "./lib/Container";
import GifStack from "./lib/GifStack";

function Home() {

  const handleNameChange = (event) => {
    console.log('Name ' + event.target.value);
    localStorage.setItem('player', event.target.value);
  }

  return (
    <header className="App-header">
      
      <GifStack />

      <Container>
       <h2 style={{
          "margin": 0,
          "fontStyle": "normal",
          "fontWeight": "400",
          "fontSize": "48px",
          "lineHeight": 0,
          "textAlign": "center",
          "color": "#000000",
          "mixBlendMode": "normal",
          "textShadow": "0px 0px 20px #053CFF"
        }}>
          <img src={WhatIsYourName} alt="What is your name?" />
        </h2>
        <div
          style={{
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,          
            display: "flex",
            alignItems: "center"
          }}
        >
          <input type="text" placeholder="Enter your name" onChange={handleNameChange} style={{
              "background": "#FFFFFF",
              "mixBlendMode": "normal",
              "border": "5px solid #FFFFFF",
              "boxShadow": "0px 0px 20px #053CFF",
              padding: 32,
              fontSize: 40,
              textAlign: "center",
              margin: 0,
              width: "1036",
          }}/>
        </div>
        <Link to="/round/1">
          <Button style={{
          }}>
            <img src={JoinGame} />
          </Button>
        </Link>
      </Container>      
    </header>
  );
}

export default Home;
