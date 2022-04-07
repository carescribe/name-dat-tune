import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';

function Admin(props) {
  const [guesses, setGuesses] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('/');
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  

  function onChange(event) {
    props.socket.emit("admin-change-round", {round: event.target.value});

    props.socket.on('player-has-guessed', (message) => {
      console.log(message)
      setGuesses(message)
    })
  }

  return (
    <div style={
      {
        height: "100vh",
        width: "200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: 20
      }
    }>
      <label for="Number">Round number</label>
      <input type="number" id="round"
        onChange={onChange}/>

    </div>
  );
}

export default Admin;
