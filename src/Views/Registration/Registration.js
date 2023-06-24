import "./Registration.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Registration = () => {

    const [submit, setSubmit] = useState('Submit');
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmitButton = (e) => {
        e.preventDefault();

        setSubmit('Submitted');
        setShowMessage(true);
    };

    const handleOkayButton = () => {
        setSubmit('Submit')
        setShowMessage(false);
    };

    return (
        <>
        <Navbar />
        <form className="reg-form">
            <h1 className="reg-title"> Registration</h1>
            {showMessage && (
                <div className="message-box">
                    <p>You have successfully submitted the form.</p>
                    <p>Just wait for our email for the next step.</p>
                    <p>Thank You!</p>
                    <button onClick={handleOkayButton}>Okay</button>
                </div>
                )}
                <div className="personal-details">
                    <h3>Personal Details:</h3>
                    <div className="name-age">
                        <div className="divide-input">
                            <label>Full Name:</label>
                            <input  type="text" className="input-name" id="fullname" placeholder="Type Your Full Name Here..."/>
                        </div>
                        <div className="divide-input">
                            <label className="age ms-5">Age:</label>
                            <input className="input_age" type="number" placeholder="Age:"/>
                        </div>
                    </div>
                    <div className="address">
                        <div className="divide-input">
                            <label className="email">Email Address: </label>
                            <input className="input_emailAdd" type="text" placeholder="Type Your Email Address Here.."/>
                        </div>
                        <div className="divide-input">
                            <label>Address:</label>
                            <input className="input_address" type="text" id="address" placeholder="Type Your Address Here..."/>
                        </div>
                    </div>
                </div>
                <div className="other-info space-top">
                    <h6>How did you hear about us?</h6>
                            <div className="section2"><input type="checkbox"/>Search Engine (Google, etc...)</div>
                            <div className="section2"><input type="checkbox"/>Social Media (Facebook, etc...)</div>
                            <div className="section2"><input type="checkbox"/>Referral __________</div>
                </div>    
                <div className="other-info memberCom">
                    <h6>Are you a member of other communities?</h6>
                        <div className="section3"><input type="radio" value="yes" name="membership"/>YES</div>
                        <div className="section3"><input type="radio" value="yes" name="membership"/>NO</div>
                </div>
                <div className="other-info">
                    <h6 className="h6Style">What is your ideal communitty?</h6>
                        <textarea rows="25" cols="30"></textarea>
                </div>
                <div className="other-info">
                    <h6 className="h6StyleTwo">What can you contribute to this community?</h6>
                        <textarea rows="25" cols="30"></textarea>
                </div>
                <div className="other-info bottom-info">
                    <p className="foot-info">After completing this form, please click Submit Form.
                        You will receive a confirmation email.
                        If you do not receive the email within a few minutes, please
                        check you spam; otherwise,
                        please contact us at admin@gmail.com.
                    </p>
                    <a href="/"><button onClick={handleSubmitButton} className="submit-button">{submit}</button>
                    </a>
            </div>
        </form>
        </>
        
    );
};

export default Registration;

