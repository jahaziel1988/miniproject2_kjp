import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'
import slide_1_picture from '../../img/community-picture-2.jpg'
import slide_2_picture from '../../img/community-banner-1.png'
import slide_3_picture from '../../img/real-life-proam-1.jpg'

const About = () => {
    return (
        <div>
            <Navbar />
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slide_1_picture} class="d-block w-100 carousel-img img-fluid" alt=""></img>
                    </div>
                    <div class="carousel-item">
                        <img src={slide_2_picture} class="d-block w-100 carousel-img img-fluid" alt=""></img>
                    </div>
                    <div class="carousel-item">
                        <img src={slide_3_picture} class="d-block w-100 carousel-img img-fluid" alt=""></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default About;