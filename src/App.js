import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import io from 'socket.io-client';

import Home from './Home.js';
import Start from './Start.js';
import Round from './Round.js';
import Admin from './Admin.js';
import CheckingAnswers from './CheckingAnswers.js';

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`https://name-dat-tune-server.herokuapp.com`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  console.log({socket})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/admin" element={<Admin socket={socket} />} />
          <Route path="/round/:roundNo" element={<Round socket={socket} />} />
          <Route path="/checking" element={<CheckingAnswers socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
