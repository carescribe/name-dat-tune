
function Admin(props) {
  function onChange(event) {
    console.log(event.target.value)
    props.socket.emit("admin-change-round", { round: event.target.value });

    props.socket.on('player-guess', (message) => {
      //{ name: 'name', round: 1, guess: 'guess' }
    })
  }

  return (
    <header className="App-header">
      <input type="number" id="round" onChange={onChange} />
    </header>
  );
}

export default Admin;
