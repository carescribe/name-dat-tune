import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
  useNavigate,
} from "react-router-dom";
import Container from "./lib/Container";
import WhatsTheSong from "./images/whats-the-song.png";
import Submit from "./images/submit.png";
import RoundTitle from './lib/RoundTitle';
import Button from "./lib/Button";

function Round(props) {
  console.log(props)
  let navigate = useNavigate();

  const [guess, setGuess] = useState(null);

  useEffect(() => {
    props.socket.on('change-round', (message) => {
      console.log(message);
      navigate(`/round/${message.round}`); 
    });
  });

  const handleSubmit = (_event) => {
    props.socket.emit('player-guess', { name: localStorage.getItem('name'), round: props.round, guess: guess });
  }

  let params = useParams();
  return (
    <header className="App-header">
      <RoundTitle roundNumber={1} />


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
          <img src={WhatsTheSong} alt="What's the song?" />
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

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your guess" onChange={(e) =>  setGuess(e.target.value)} style={{
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
          </form>
        </div>
        <Button onPress={handleSubmit}>
          <img src={Submit} />
        </Button>
      </Container>      
    </header>
  );
}

export default Round;
