import React from 'react';
import io from 'socket.io-client';
import './App.css';
const socket = io('http://localhost:9999/rooms');
console.log(socket);


function App() {
  
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
