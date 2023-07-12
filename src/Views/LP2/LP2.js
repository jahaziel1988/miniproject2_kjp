import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './LP2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

import imageOne from './../../img/image1.jpg'
import imageTwo from '../..//img/image2.jpg'
import imageThree from '../../img/2KLCCityScapes.png'

const HomeTwo = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  const fadeInLeftAnimation = {
    opacity: scrollPosition > 300 ? 1 : 0,
    transform: `translateX(${scrollPosition > 300 ? '0' : '-100px'})`,
    transition: 'opacity 1s ease-out, transform 0.5s ease-out',
  };

  const fadeInRightAnimation = {
    opacity: scrollPosition > 600 ? 1 : 0,
    transform: `translateX(${scrollPosition > 600 ? '0' : '10px'})`,
    transition: 'opacity 1.5s ease-out, transform 0.5s ease-out',
  };

  const fadeInUpAnimation = {
    opacity: scrollPosition > 900 ? 1 : 0,
    transform: `translateY(${scrollPosition > 900 ? '0' : '100px'})`,
    transition: 'opacity 1.5s ease-out, transform 0.5s ease-out',
  };
  
  const fadeInAnimation = {
    opacity: scrollPosition > 900 ? 1 : 0,
    transition: 'opacity 1.5s ease-out',
  };

  return (
    <div className='home-two'>
      <div className='header'>
        <h2 className='header-title' style={fadeInAnimation}>
          Immerse Yourself in the World of NBA2K
        </h2>
      </div>
      <div className='home-two-content'>
        <div className='home-two-row' style={fadeInLeftAnimation}>
          <div className='home-two-column'>
            <h3>Join Our Community</h3>
            <p className='home-two-paragraph'>
              Join our vibrant NBA2KLC community and experience the excitement, camaraderie, and endless basketball
              fun. Register now and let's take our love for the game to new heights!
            </p>
            <button className='button-link'>
              <a href='registration' to='/registration' className='home-two-button'>
                Register here <FontAwesomeIcon icon={faArrowUp} className='fa-icon' />
              </a>
            </button>
          </div>
          <div className='home-two-column'>
            <img src={imageTwo} alt='Join Now' className='home-two-image' />
          </div>
        </div>
        <div className='home-two-row' style={fadeInRightAnimation}>
          <div className='home-two-column'>
            <img src={imageOne} alt='Gallery' className='home-two-image' />
          </div>
          <div className='home-two-column'>
            <h3>Explore Our Gallery</h3>
            <p className='home-two-paragraph'>
              Explore our extensive gallery showcasing thrilling NBA2K moments, jaw-dropping dunks, and impressive
              gameplays. Discover the talent within our community. If you become a member, you can also add your own
              highlights!
            </p>
            <button className='button-link'>
              <a href='gallery' to='/gallery' className='home-two-button'>
                Go to Gallery<FontAwesomeIcon icon={faArrowUp} className='fa-icon' />
              </a>
            </button>
          </div>
        </div>
        <div className='home-two-row' style={fadeInUpAnimation}>
          <div className='home-two-column'>
            <h3 className='about'>About Us</h3>
            <p className='home-two-paragraph'>
              Learn more about our community, its vision, and the dedicated team behind NBA2KLC. Get to know us better and
              be a part of our journey towards greatness.
            </p>
            <button className='button-link'>
              <a href='about' to='/about' className='home-two-button'>
                See about Us<FontAwesomeIcon icon={faArrowUp} className='fa-icon' />
              </a>
            </button>
          </div>
          <div className='home-two-column'>
            <div className='image-container'>
              <img src={imageThree} alt='About Us' className='home-two-image' />
              <div className='image-overlay'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
