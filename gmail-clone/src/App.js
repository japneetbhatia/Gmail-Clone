import React from 'react';
import './App.css';
import Header from './Containers/Header';
import Sidebar from './Containers/Sidebar';
import Mail from './Containers/Mail';
import EmailList from './Components/EmailList';
import SendMail from './Containers/SendMail';
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  // Link
} from "react-router-dom";
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from './Containers/Login';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = userSelector(selectUser);

  return (
    <Router>

      {!user ? (
        <Login />
      ) : (
        <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch >
            <Route path = "/mail">
              <Mail />
            </Route>
            <Route path = "/">
              <EmailList />
            </Route>
          </Switch >
        </div>
        {/* <h2>Building Gmail</h2> */}
          {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;