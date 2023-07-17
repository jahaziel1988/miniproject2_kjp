import React from 'react';
import { useEffect } from 'react';
import NavHome from '../../Components/NavHome/NavHome'
import Footer from '../../Components/Footer/Footer';
import './../About/About.css'
import slide_1_picture from '../../img/real-life-proam-1.jpg'
import slide_2_picture from '../../img/community-banner-1.png'
import slide_3_picture from '../../img/community-picture-2.jpg'

const About = () => {
    useEffect(() => {
        document.title = "2KLC | About Us"
      }, []);
    return (
        <div className="about_page">
            <NavHome />
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide_1_picture} className="d-block w-100 carousel-img carousel-img-1" alt=""></img>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_2_picture} className="d-block w-100 carousel-img" alt=""></img>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_3_picture} className="d-block w-100 carousel-img" alt=""></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='about-section container-fluid p-3'>
                <div className='text-center'>
                    <h2 className='h2'>ABOUT US</h2>
                </div>
                <div className='container-fluid border mt-3'></div>
                <p className='p-5 m-0 fs-4'>
                  This is a lively Filipino community dedicated to playing NBA2K. It consists of players, fans, and enthusiasts who share a passion for the popular basketball video game series. The community is diverse, comprising individuals from different backgrounds, age groups, and gaming skill levels, all united by their love  for basketball and gaming. It's the premier destination for all 2K gaming enthusiasts to revel in their most exhilarating moments and showcase their gameplay expertise. Founded by passionate gamers, our community is dedicated to celebrating the talents and skills of players within the dynamic world of 2K games. At 2KLC, our mission is to create a thriving platform where gamers can unite, connect, and share their most epic in-game highlights. We aim to provide a space that fosters a sense of belonging, camaraderie, and mutual appreciation for the excitement that 2K games bring to our lives. As avid gamers ourselves, we realized the immense joy and satisfaction that come from achieving extraordinary feats within the virtual realms of 2K. Inspired by the captivating moments we experienced and the incredible talents we witnessed, we envisioned a community that could serve as a gallery of triumphs and a hub for interactions among players.
                </p>
                <p className='p-5 m-0 fs-4'>
                    What sets 2KLC apart is our unwavering commitment to providing a user-friendly and visually captivating platform. We strive to make it seamless for our members to upload their player cards and video highlights, ensuring that their proudest moments reach a wider audience. Whether you're an amateur enthusiast or a seasoned pro, we invite you to join our thriving community of 2K gamers. Immerse yourself in a collection of the most jaw-dropping dunks, clutch shots, and game-changing plays. Discover inspiration from the best, and share your brilliance with fellow players who truly appreciate the art of gaming. We love hearing from our community! If you have any suggestions, feedback, or inquiries, please don't hesitate to reach out to us. You can contact our team through the provided channels, and we'll be more than happy to assist you.
                </p>
                <div className='container-fluid border mb-3'></div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;