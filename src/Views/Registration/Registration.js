import "./Registration.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Registration = () => {
    return (
        <>
        <Navbar />
        <form className="reg-form">
            <h1>Registration</h1>
                <div className="personal-details">
                    <h3>Personal Details:</h3>
                    <div className="name-age">
                        <label>Full Name:</label>
                        <input  type="text" id="fullname" placeholder="Type your name here..."/>
                        <label className="age ms-5">Age:</label>
                        <input className="input_age" type="number"/>
                    </div>
                    <div>
                        <label>Address:</label>
                        <input className="input_address" type="text" id="address" placeholder="Type your address here..."/>
                    </div>
                </div>
                <div className="other-info">
                    <h6>How did you hear about us?</h6>
                            <div className="section2"><input type="checkbox"/>Search Engine (Google, etc...)</div>
                            <div className="section2"><input type="checkbox"/>Social Media (Facebook, etc...)</div>
                            <div className="section2"><input type="checkbox"/>Referral __________</div>
                </div>    
                <div className="other-info">
                    <h6>Are you a member of other communities?</h6>
                        <div className="section3"><input type="radio" value="yes" name="membership"/>YES</div>
                        <div className="section3"><input type="radio" value="yes" name="membership"/>NO</div>
                </div>
                <div className="other-info">
                    <h6>Ideal Community Comment Box:</h6>
                        <textarea rows="25" cols="30"></textarea>
                </div>
                <div className="other-info">
                    <h6>What can you contribute to this community?</h6>
                        <textarea rows="25" cols="30"></textarea>
                </div>
                <div className="other-info">
                    <p>After completing this form, please click Submit Form.
                        You will receive a confirmation email.
                        If you do not receive the email within a few minutes, please
                        check you spam; otherwise,
                        please contact us at admin@gmail.com.
                    </p>
                    <button><a href="/">SUBMIT</a></button>
                </div>
        </form>
        <Footer/>
        </>
        
    );
};

export default Registration;

