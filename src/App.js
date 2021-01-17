import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogIn from './Components/Auth/LogIn';
import SignUp from './Components/Auth/SignUp';
import Landing from './Components/Landing/Landing';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/register" component={SignUp} />
    </BrowserRouter>
  );
};

export default App;
