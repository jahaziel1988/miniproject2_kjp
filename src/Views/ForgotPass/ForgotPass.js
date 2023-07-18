import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './ForgotPass.css';
import Footer from '../../Components/Footer/Footer';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
    } else {
      setIsEmailSent(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="forgot-password-container">
        <h2 className="forgot-password-title">Forgot Your Password?</h2>
        {isEmailSent ? (
          <p className="email-sent-message">
            We send you an email for the instructions of resetting your password.
          </p>
        ) : (
          <>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className={`input-field ${emailError ? 'error' : ''}`}
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error-message">Please enter your email address</p>}
            </div>
            <button className="reset-password-button" onClick={handleForgotPassword}>
              Reset Password
            </button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
