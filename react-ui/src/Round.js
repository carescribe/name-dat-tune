import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
  useNavigate,
} from "react-router-dom";

function Round(props) {
  console.log(props)
  let navigate = useNavigate();

  useEffect(() => {
    props.socket.on('change-round', (message) => {
      console.log(message);
      navigate(`/round/${message.round}`); 
    });
  });

  const handleSubmit = (event) => {
    const guess = event.target.value;
    props.socket.emit('player-guess', { name: localStorage.getItem('name'), round: props.round, guess: guess });
  }

  let params = useParams();
  return (
    <header className="App-header">
      <h1>Round {params.roundNo}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your guess" />
      </form>

    </header>
  );
}

export default Round;
