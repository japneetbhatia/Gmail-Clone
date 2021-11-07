import React from 'react';
import './App.css';
import Header from './Containers/Header';
import Sidebar from './Containers/Sidebar';
import Mail from './Containers/Mail';
import EmailList from './Components/EmailList';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes >
            <Route path = "/mail">
              <Mail />
            </Route>
            <Route path = "/">
              <EmailList />
            </Route>
          </Routes >
        </div>
        {/* <h2>Building Gmail</h2> */}
      </div>
    </Router>
  );
}

export default App;
