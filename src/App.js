import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

  const getDialogs = () => {
      return <Dialogs dialogsData={props.state.dialogsData}
                      messagesData={props.state.messagesData}/>
  };

  const getProfile = () => {
      return <Profile postsData={props.state.postsData}
                      dispatch={props.dispatch}
                      newPostText={props.state.newPostText}/>
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
