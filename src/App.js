import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home.js';
import Round from './Round.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/round">
            <Route path=":roundNo" element={<Round />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
