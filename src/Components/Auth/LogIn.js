import React from 'react';
import avatar from '../../Images/avatar.svg';
import '../Auth/login.css';

const LogIn = () => {
  return (
    <div className="form-wrapper">
      <div className="avatar">
        <img src={avatar} alt="avatar"></img>
      </div>

      <div className="form-title">
        <h1>Log in to your memories...</h1>
      </div>
      <div className="input-container">
        <i className="fas fa-user icon"></i>
        <input
          type="text"
          className="input-field"
          placeholder="Enter your email..."
          name="email"
        ></input>
      </div>
      <div className="input-container">
        <i className="fas fa-key icon"></i>
        <input
          type="password"
          className="input-field"
          name="password"
          placeholder="Type your password..."
        ></input>
      </div>
      <button className="submit" type="submit">
        LOG IN
      </button>
      <div className="last-div">
        <a>Forgot password?</a>
        <a>Sign Up</a>
      </div>
    </div>
  );
};

export default LogIn;
