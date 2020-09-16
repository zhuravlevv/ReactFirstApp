import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

  const getDialogs = () => {
      return <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                      messagesData={props.state.dialogsPage.messagesData}
                      newMessageBody={props.state.dialogsPage.newMessageBody}
                      dispatch={props.dispatch}/>
  };

  const getProfile = () => {
      return <Profile postsData={props.state.profilePage.postsData}
                      dispatch={props.dispatch}
                      newPostText={props.state.profilePage.newPostText}/>
  };

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Route exact path='/dialogs' render={getDialogs} />
                  <Route path='/profile' render={getProfile}/>
              </div>
          </div>
      </BrowserRouter>
  );
};

export default App;
