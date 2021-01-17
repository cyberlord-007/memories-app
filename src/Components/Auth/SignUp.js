import React from 'react';
import avatar from '../../Images/avatar.svg';

const SignUp = () => {
  return (
    <div>
      <div className="form-wrapper">
        <div className="avatar">
          <img src={avatar} alt="avatar"></img>
        </div>

        <div className="form-title">
          <h1>REGISTER</h1>
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
        <div className="input-container">
          <i className="fas fa-key icon"></i>
          <input
            type="password"
            className="input-field"
            name="password"
            placeholder="Confirm your password..."
          ></input>
        </div>
        <button className="submit" type="submit">
          SIGN UP
        </button>
        <div className="last-div">
          <a>Already have an account? </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
