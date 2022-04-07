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


  let params = useParams();
  return (
    <header className="App-header">
      <h1>Round {params.roundNo}</h1>
    </header>
  );
}

export default Round;
