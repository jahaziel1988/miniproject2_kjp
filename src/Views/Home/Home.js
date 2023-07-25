import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import NavHome from '../../Components/NavHome/NavHome';
import Footer from '../../Components/Footer/Footer'
import './Home.css';



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
                <h2 className='titleC'>Add Your Highlights!</h2>
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
