import React from 'react';
import './App.css';
import Header from './Containers/Header';
import Sidebar from './Containers/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <h2>Building Gmail</h2> */}
      <Sidebar />
    </div>
  );
}

export default App;
