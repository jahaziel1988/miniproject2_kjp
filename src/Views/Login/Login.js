import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Login.css';
import Footer from '../../Components/Footer/Footer';

const Login = () => {
  const [showPage, setShowPage] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    setShowPage(true);
  }, []);

  useEffect(() => {
    document.title = '2KLC | Log in';
  }, []);

  const handleLogin = (e)=> {
    e.preventDefault();

    if (!username) {
      setUsernameError((prevErrors) => ({ ...prevErrors, username: true }));
    } else if(!password) {
      setPasswordError((prevErrors) => ({ ...prevErrors, password: true }));
    } else{
      window.location.href = '/home';
    }
  };


  return (
    <div>
      <Navbar />
      <div className={`login-container ${showPage ? 'fade-in' : ''}`}>
        <h2 className="login-title">Log in to your account</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className={`input-field ${usernameError ? 'error' : ''}`}
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className="error-message">Please type your username</p>}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className={`input-field ${passwordError ? 'error' : ''}`}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">Please type your password</p>}
        </div>
        <div className="forgot-password">
          <a href="forgotpass">Forgot your password?</a>
        </div>
        <button className="login-button mb-4" onClick={handleLogin} >
          Log in
        </button>
      </div>
      <Footer/>
    </div> 
  );
};

export default Login;
