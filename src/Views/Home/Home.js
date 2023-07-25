import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import NavHome from '../../Components/NavHome/NavHome';
import Footer from '../../Components/Footer/Footer'
import './Home.css';

import paolo_herrera from '../../vids/paolo_herrera.mp4';
import james_lorete from '../../vids/james_lorete.mp4';
import aaron_garcia from '../../vids/aaron_garcia.mp4';
import daryn_gaces from '../../vids/daryn_gaces.mp4';
import rogelio_yulo_uy from '../../vids/rogelio_yulo_uy.mp4';
import miguel_reloj from '../../vids/miguel_reloj.mp4';


import thumbnail1 from '../../img/Thumbnail-img-BRIX.png';
import thumbnail2 from '../../img/Thumbnail-img-DRE.png';
import thumbnail3 from '../../img/Thumbnail-img-GECKZOID.png';
import thumbnail4 from '../../img/Thumbnail-img-HANGMAN.png';
import thumbnail5 from '../../img/Thumbnail-img-JAMES.png';
import thumbnail6 from '../../img/Thumbnail-img-JENNIERUBYJANE.png';
import thumbnail7 from '../../img/Thumbnail-img-JUICER.png';
import thumbnail8 from '../../img/Thumbnail-img-LONEWOLPH.png';
import thumbnail9 from '../../img/Thumbnail-img-NINI.png';
import thumbnail10 from '../../img/Thumbnail-img-PAO.png';
import thumbnail11 from '../../img/Thumbnail-img-PAPI.png';
import thumbnail12 from '../../img/Thumbnail-img-PRYME.png';
import thumbnail13 from '../../img/Thumbnail-img-RYU.png';
import thumbnail14 from '../../img/Thumbnail-img-SEPH.png';
import thumbnail15 from '../../img/Thumbnail-img-YUGIBOI.png';

const Home = () => {
  const [playingCard, setPlayingCard] = useState(null);
  const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [playerCardFile, setPlayerCardFile] = useState(null);
  const [videoHighlightsFile, setVideoHighlightsFile] = useState(null);
  const [highlightData, setHighlightData] = useState([]);

  const handleCardClick = (cardId) => {
    if (playingCard === cardId) {
      videoRef.current.pause();
      setPlayingCard(null);
    } else {
      setPlayingCard(cardId);
    }
  };


  const handleAddHighlightsClick = () => {
    setShowModal(true);
  };

  const handleAddFile = () => {
    setShowModal(false);

      
    if (playerCardFile && videoHighlightsFile) {
        setHighlightData((prevData) => [
          ...prevData,
          {
            id: prevData.length + 1,
            playerCard: URL.createObjectURL(playerCardFile),
            videoHighlight: URL.createObjectURL(videoHighlightsFile),
          },
        ]);
      }
    
      setPlayerCardFile(null);
      setVideoHighlightsFile(null);
  }

  const handleCloseModalClick = () => {
    setShowModal(false);
  };
  

  const handlePlayerCardFileChange = (e) => {
    const file = e.target.files[0];
    setPlayerCardFile(file);
  };
  
  const handleVideoHighlightsFileChange = (e) => {
    const file = e.target.files[0];
    setVideoHighlightsFile(file);
  };  
  

  useEffect(() => {
    document.title = "2KLC | Home"
  }, []);
  
return (

<div>
    <NavHome />
    <div className="highlight-Homepage ren" style={{ backgroundColor: '#38117A' }}>
        <div className='container-fluid d-flex align-items-center justify-content-between'>
            <div className="search-card">
                <input type="text" placeholder="Search Username" />
            </div>
            <div className="add-highlights-button">
                <button onClick={handleAddHighlightsClick}>Add Your Highlights</button>
            </div>
        </div>
        {showModal && (
        <div className="modal">
            <div className="modal-content">
                <h2>Add Your Highlights!</h2>
            <span className="close" onClick={handleCloseModalClick}>
                &times;
            </span>
            <p>Add Your Player Card:</p>
            <input
                className='input-file'
                type="file"
                accept="image/*"
                onChange={handlePlayerCardFileChange}
            />
            <p>Add Your Video Highlight:</p>
            <input
                className='input-file'
                type="file" 
                accept="video/*"
                onChange={handleVideoHighlightsFileChange}
            />
            <button className='add-button' onClick={handleAddFile}>Add</button>
            </div>
      </div>
    )}

    <div className="highlight-cards">
        
        <div className='card'>  
        {playingCard === 1 ? (
            <video
            src={aaron_garcia}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail1}
            alt="Thumbnail 1"
            onClick={() => handleCardClick(1)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(1)}>
            {playingCard === 1 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 2 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail2}
            alt="Thumbnail 2"
            onClick={() => handleCardClick(2)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(2)}>
            {playingCard === 2 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 3 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail3}
            alt="Thumbnail 3"
            onClick={() => handleCardClick(3)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(3)}>
            {playingCard === 3 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 4 ? (
            <video
            src={daryn_gaces}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail4}
            alt="Thumbnail 4"
            onClick={() => handleCardClick(4)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(4)}>
            {playingCard === 4 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 5 ? (
            <video
            src={james_lorete}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail5}
            alt="Thumbnail 5"
            onClick={() => handleCardClick(5)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(5)}>
            {playingCard === 5 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 6 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail6}
            alt="Thumbnail 6"
            onClick={() => handleCardClick(6)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(6)}>
            {playingCard === 6 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 7 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail7}
            alt="Thumbnail 7"
            onClick={() => handleCardClick(7)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(7)}>
            {playingCard === 7 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 8 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail8}
            alt="Thumbnail 8"
            onClick={() => handleCardClick(8)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(8)}>
            {playingCard === 8 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 9 ? (
            <video
            src={miguel_reloj}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail9}
            alt="Thumbnail 9"
            onClick={() => handleCardClick(9)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(9)}>
            {playingCard === 9 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 10 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail10}
            alt="Thumbnail 10"
            onClick={() => handleCardClick(10)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(10)}>
            {playingCard === 10 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 11 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail11}
            alt="Thumbnail 11"
            onClick={() => handleCardClick(11)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(11)}>
            {playingCard === 11 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 12 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail12}
            alt="Thumbnail 12"
            onClick={() => handleCardClick(12)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(12)}>
            {playingCard === 12 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 13 ? (
            <video
            src={rogelio_yulo_uy}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail13}
            alt="Thumbnail 13"
            onClick={() => handleCardClick(13)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(13)}>
            {playingCard === 13 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 14 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail14}
            alt="Thumbnail 14"
            onClick={() => handleCardClick(14)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(14)}>
            {playingCard === 14 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 15 ? (
            <video
            src={paolo_herrera}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail15}
            alt="Thumbnail 15"
            onClick={() => handleCardClick(15)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(15)}>
            {playingCard === 15 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

          {highlightData.map((highlight) => (
            <div className="card" key={highlight.id}>
              {playingCard === highlight.id ? (
                <video src={highlight.videoHighlight} ref={videoRef} autoPlay loop controls />
              ) : (
                <img
                  src={highlight.playerCard}
                  alt={`Thumbnail ${highlight.id}`}
                  onClick={() => handleCardClick(highlight.id)}
                />
              )}
              <div className="bottom-center">
                <button onClick={() => handleCardClick(highlight.id)}>
                  {playingCard === highlight.id ? 'Go Back' : 'See Highlights'}
                </button>
              </div>
            </div>
            ))}
        </div>
    </div>
    <Footer />
</div>

  );
};

export default Home;
