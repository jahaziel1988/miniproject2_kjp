import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Login.css';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

const Login = () => {
  const [showPage, setShowPage] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    setShowPage(true);
  }, []);

  useEffect(() => {
    document.title = '2KLC | Log in';
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
  
    setUsernameError(false);
    setPasswordError(false);
    setLoginError('');
  
    if (!username) {
      setUsernameError(true);
    } else if (!password) {
      setPasswordError(true);
    } else {
      axios
        .post('http://localhost:4000/users/login', { username, password })
        .then((response) => {
          if (response.data && response.data.user) {
            localStorage.setItem('userData', JSON.stringify(response.data.user));
  
            window.location.href = 'home';
          } else if (response.data && response.data.admin) {
            window.location.href = 'adminboard';
          } else {
            setLoginError(response.data.error || 'Login Failed. Please try again later');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoginError('Sorry, it seems your account is still pending approval or the email and password provided are invalid. Please verify and retry.');
        });
    }
  };
  

  

  return (
    <div className='login-main-container'>
      <Navbar />
      <div className={`login-container ${showPage ? 'fade-in' : ''}`}>
        <h2 className="login-title">Log in to your account</h2>
        {loginError && <p className="error-message">{loginError}</p>}
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
        <button className="login-button mb-4" onClick={handleLogin}>
          Log in
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
