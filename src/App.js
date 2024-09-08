import logo from './logo.svg';
import './App.css';
import CounterComponent from './CounterComponent';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

function App() {
  return (
    <div className="App">
      <CounterComponent/>
    </div>
  );
}

export default App;
