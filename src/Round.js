import { useParams } from "react-router-dom";

function Round() {
  let params = useParams();
  return (
    <header className="App-header">
      <h1>Round {params.roundNo}</h1>
    </header>
  );
}

export default Round;
