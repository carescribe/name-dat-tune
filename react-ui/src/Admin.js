import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';

function Admin(props) {
  const [guesses, setGuesses] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000/');
    setSocket(newSocket);
    // setGuesses([
    //   {name: 'Tom', round: '1', guess: 'Tom'},
    //   {name: 'Tom', round: '2', guess: 'sdfs'},
    //   {name: 'Tom', round: '3', guess: 'sdf'},
    //   {name: 'James', round: '1', guess: 'Foo'},
    //   {name: 'James', round: '2', guess: 'Bar'},
    //   {name: 'James', round: '3', guess: 'Baz'},
    // ]);
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
