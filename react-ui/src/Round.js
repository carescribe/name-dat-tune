import React, {useEffect, useState, useRef} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Container from "./lib/Container";
import WhatsTheSong from "./images/whats-the-song.png";
import Submit from "./images/submit.png";
import RoundTitle from './lib/RoundTitle';
import Button from "./lib/Button";
import CheckingAnswers from './CheckingAnswers';

function Round(props) {
  let navigate = useNavigate();
  let params = useParams();
  const inputEl = useRef(null);

  const [guess, setGuess] = useState(null);
  const [round, setRound] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('player') || ! props.socket) {
      window.location = '/';
    }
    props.socket.on('change-round', (message) => {
      console.log(message.round);
      setRound(message.round);
      setGuess(null)
      navigate(`/round/${
        message.round
      }`);
    });
  });

  function handleSubmit() {
    console.log('Guessed ', guess, params.round)
    setGuess(inputEl.current.value);
    props.socket.emit('player-guess', {
      name: localStorage.getItem('player'),
      round: params.round || round,
      guess: inputEl.current.value
    });
  }

  return (
    <header className="App-header">
      <RoundTitle roundNumber={params.round}/>

      { guess ? CheckingAnswers() : (<Container>
        <h2 style={
          {
            "margin": 0,
            "fontStyle": "normal",
            "fontWeight": "400",
            "fontSize": "48px",
            "lineHeight": 0,
            "textAlign": "center",
            "color": "#000000",
            "mixBlendMode": "normal",
            "textShadow": "0px 0px 20px #053CFF"
          }
        }>
          <img src={WhatsTheSong}
            alt="What's the song?"/>
        </h2>
        <div style={
          {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            display: "flex",
            alignItems: "center"
          }
        }>

          <form>
            <input type="text" refplaceholder="Enter your guess"
              ref={inputEl}
              style={
                {
                  "background": "#FFFFFF",
                  "mixBlendMode": "normal",
                  "border": "5px solid #FFFFFF",
                  "boxShadow": "0px 0px 20px #053CFF",
                  padding: 32,
                  fontSize: 40,
                  textAlign: "center",
                  margin: 0,
                  width: "1036"
                }
              }/>
          </form>
        </div>
        <Button>
          <img onClick={handleSubmit} src={Submit}/>
        </Button>
      </Container>)
    }
    </header>
  );
}

export default Round;
