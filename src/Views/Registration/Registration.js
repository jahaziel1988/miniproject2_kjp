import React, { useState, useEffect } from 'react';
import './Registration.css';
import Navbar from '../../Components/Navbar/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [hearAboutUs, setHearAboutUs] = useState('');
  const [memberOfCommunities, setMemberOfCommunities] = useState('');
  const [communityActivities, setCommunityActivities] = useState('');
  const [dreamCommunity, setDreamCommunity] = useState('');
  const [showForm, setShowForm] = useState(false);

  const [activitiesCount, setActivitiesCount] = useState(0);
  const [dreamCommunityCount, setDreamCommunityCount] = useState(0);

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [conPasswordError, setConPasswordError] = useState(false);
  const [emailAddError, setEmailAddError] = useState(false);
  const [fullNameError, setFullNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [selectedDateError, setSelectedDateError] = useState(false);
  const [hearAboutUsError, setHearAboutUsError] = useState(false);
  const [memberOfCommunitiesError, setMemberOfCommunitiesError] = useState(false);
  const [communityActivitiesError, setCommunityActivitiesError] = useState(false);
  const [dreamCommunityError, setDreamCommunityError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  useEffect(() => {
    document.title = '2KLC | Registration Form';
  }, []);

  const nextStep = () => {
    if (step === 1 && validateFields()) {
      setStep(step + 1);
    } else if (step === 2 && validateStep2()) {
      setStep(step + 1);
    }
  };


  const validateFields = () => {
    let isValid = true;

    if (username.trim() === '') {
      setUsernameError(true);
      isValid = false;
    } else {
      setUsernameError(false);
    }

    if (password.trim() === '' || password.length < 6) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (conPassword.trim() === '') {
      setConPasswordError(true);
      isValid = false;
    } else if (password !== conPassword) {
      setConPasswordError(true);
      isValid = false;
    } else {
      setConPasswordError(false);
    }

    if (emailAdd.trim() === '') {
      setEmailAddError(true);
      isValid = false;
    } else if (!isValidEmail(emailAdd)) {
      setEmailAddError(true);
      isValid = false;
    } else {
      setEmailAddError(false);
    }

    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;

    if (fullName.trim() === '') {
      setFullNameError(true);
      isValid = false;
    } else {
      setFullNameError(false);
    }

    if (address.trim() === '') {
      setAddressError(true);
      isValid = false;
    } else {
      setAddressError(false);
    }

    if (selectedDate === null) {
      setSelectedDateError(true);
      isValid = false;
    } else {
      setSelectedDateError(false);
    }

    if (hearAboutUs === '') {
      setHearAboutUsError(true);
      isValid = false;
    } else {
      setHearAboutUsError(false);
    }

    if (memberOfCommunities === '') {
      setMemberOfCommunitiesError(true);
      isValid = false;
    } else {
      setMemberOfCommunitiesError(false);
    }

    return isValid;
  };

  const validateStep3 = () => {
    let isValid = true;

    if (communityActivities.trim() === '') {
      setCommunityActivitiesError(true);
      isValid = false;
    } else {
      setCommunityActivitiesError(false);
    }

    if (dreamCommunity.trim() === '') {
      setDreamCommunityError(true);
      isValid = false;
    } else {
      setDreamCommunityError(false);
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleActivitiesChange = (e) => {
    const value = e.target.value;
    setCommunityActivities(value);
    setActivitiesCount(value.length);
  };

  const handleDreamCommunityChange = (e) => {
    const value = e.target.value;
    setDreamCommunity(value);
    setDreamCommunityCount(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateStep3()) {
        axios.post('http://localhost:4000/register', {
        username,
        password,
        email: emailAdd,
        fullName,
        address,
        selectedDate,
        hearAboutUs,
        memberOfCommunities,
        communityActivities,
        dreamCommunity
      })
        .then(response => {
          console.log(response.data);
          setShowSuccessMessage(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const handleOkClick = () => {
    setShowSuccessMessage(false);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-container container p-5">
            <div className={`fade-in ${showForm ? 'show' : ''}`}>
              <form onSubmit={handleSubmit}>
                <div className="text-header">
                  <h2>Create Account Information</h2>
                  <p>These information will be used to Log In.</p>
                </div>
                <label>Email Address:</label>
                <input
                  type="text"
                  value={emailAdd}
                  placeholder="Enter Your Email Address.."
                  onChange={(e) => setEmailAdd(e.target.value)}
                  className={emailAddError ? 'input-field error' : 'input-field'}
                />
                {emailAddError && <p className="error-message">Please enter a valid email</p>}
                <br />
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  placeholder="Enter Your Username.."
                  onChange={(e) => setUsername(e.target.value)}
                  className={usernameError ? 'input-field error' : 'input-field'}
                />
                {usernameError && <p className="error-message">Please enter a username</p>}
                <br />

                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Your Password.."
                  onChange={(e) => setPassword(e.target.value)}
                  className={passwordError ? 'input-field error' : 'input-field'}
                />
                {passwordError && <p className="error-message">Please enter a password (Minimum of 6 characters)</p>}
                <br />
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={conPassword}
                  placeholder="Confirm Your Password.."
                  onChange={(e) => setConPassword(e.target.value)}
                  className={conPasswordError ? 'input-field error' : 'input-field'}
                />
                {conPasswordError && (
                  <p className="error-message">Your password doesn't match</p>
                )}
                <br />
                <div className="button-container">
                  <div className="buttonNext">
                    <button className="next-button" type="button" onClick={nextStep}>
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2 className="text-header">Personal Details</h2>
              <label>Full Name:</label>
              <input
                type="text"
                value={fullName}
                placeholder="Enter Your Full Name.."
                onChange={(e) => setFullName(e.target.value)}
                className={fullNameError ? 'input-field error' : 'input-field'}
              />
              {fullNameError && <p className="error-message">Please enter your full name</p>}
              <br />
              <label>Address:</label>
              <input
                type="text"
                value={address}
                placeholder="Enter Your Address.."
                onChange={(e) => setAddress(e.target.value)}
                className={addressError ? 'input-field error' : 'input-field'}
              />
              {addressError && <p className="error-message">Please enter your address</p>}
              <br />
              <label className="dob">Date of Birth:</label>
              <div className="dob">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select your birth date"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={50}
                  maxDate={new Date(2013, 0, 1)}
                  className={selectedDateError ? 'input-field error' : 'input-field'}
                />
              </div>
              {selectedDateError && <p className="error-message">Please select a date of birth</p>}
              <br />
              <div className="question-container">
                <div className="question-left">
                  <label>How did you hear about us?</label>
                  <select
                    value={hearAboutUs}
                    onChange={(e) => setHearAboutUs(e.target.value)}
                    className={hearAboutUsError ? 'input-field error' : 'input-field'}
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="Search Engine">Search Engine (Google, etc...)</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Others">Others</option>
                  </select>
                  {hearAboutUsError && <p className="error-message">Please choose your answer</p>}
                </div>
                <div className="question-right">
                  <label>Are you a member of other communities?</label>
                  <div className=".dropdown-style-right">
                    <select
                      value={memberOfCommunities}
                      onChange={(e) => setMemberOfCommunities(e.target.value)}
                      className={memberOfCommunitiesError ? 'input-field error' : 'input-field'}
                    >
                      <option value="" disabled>
                        Choose
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {memberOfCommunitiesError && <p className="error-message">Please choose your answer</p>}
                  </div>
                </div>
              </div>

              <br />
              <div className="button-container">
                <button className="back-button" type="button" onClick={prevStep}>
                  Go back
                </button>
                <button className="next-button" type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2 className="text-header">Community Details</h2>
              <div className="message-box">
                <label>What can you contribute to this community?</label>
                <textarea
                  className={communityActivitiesError ? 'message-input error' : 'message-input'}
                  value={communityActivities}
                  placeholder="Enter your activities in this community.."
                  onChange={handleActivitiesChange}
                  maxLength={400}
                ></textarea>
                <span className="char-count">{activitiesCount}/400</span>
                {communityActivitiesError && <p className="error-message">Please answer this question</p>}
              </div>
              <div className="message-box">
                <label>What is your dream community?</label>
                <textarea
                  className={dreamCommunityError ? 'message-input error' : 'message-input'}
                  value={dreamCommunity}
                  placeholder="Enter your dream community.."
                  onChange={handleDreamCommunityChange}
                  maxLength={400}
                ></textarea>
                <span className="char-count">{dreamCommunityCount}/400</span>
                {dreamCommunityError && <p className="error-message">Please answer this question</p>}
              </div>

              <br />
              <div className="button-container">
                <button className="back-button" type="button" onClick={prevStep}>
                  Go back
                </button>
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {renderForm()}
        {showSuccessMessage && (
          <div className="success-message">
            <p>
              Thank you for submitting your form! We will email you for the update.
            </p>
            <a href='/'><button className="ok-button" onClick={handleOkClick}>
              OK
            </button></a>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default RegistrationForm;
