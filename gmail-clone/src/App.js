import React, {useEffect} from 'react';
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
import { useSelector, useDispatch } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import Login from './Containers/Login';
import { auth } from "./firebase"

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  const user=useSelector(selectUser);


  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user)
      {
      //user is logged in
      dispatch(login({
        displayName:user.displayName,
        email:user.email,
        photoUrl:user.photoURL,
      }))
      }
      else{

      }
    })
  },[]);

  return (
    <Router>
      {!user?(<Login/>):(
            
    <div className="app">
    <Header/>

  <div className='app__body'> 
    <Sidebar/>


  <Switch>
    <Route path='/mail'>
      <Mail/>
    </Route> 

    <Route path='/'>
      <EmailList/>  
    </Route> 

  </Switch>



  </div> 

  {sendMessageIsOpen && <SendMail/>}
  </div>


      )}


    </Router>
  );
}

export default App;

// function App() {
//   const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
//   const user = userSelector(selectUser);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     auth.on
//   })

//   return (
//     <Router>

//       {!user ? (
//         <Login />
//       ) : (
//         <div className="App">
//         <Header />
//         <div className="app__body">
//           <Sidebar />
//           <Switch >
//             <Route path = "/mail">
//               <Mail />
//             </Route>
//             <Route path = "/">
//               <EmailList />
//             </Route>
//           </Switch >
//         </div>
//         {/* <h2>Building Gmail</h2> */}
//           {sendMessageIsOpen && <SendMail />}
//       </div>
//       )}
//     </Router>
//   );
// }

// export default App;