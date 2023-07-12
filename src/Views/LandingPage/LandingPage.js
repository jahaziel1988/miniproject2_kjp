import "bootstrap/dist/css/bootstrap.css";
import './LandingPage.css';
import { useEffect } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Trailer from '../../vids/2KLCSEASONXINTROCAPTAINS.mp4';
import LP2 from './../LP2/LP2';

function Home() {
  useEffect(() => {
    document.title = "2KLC | Welcome!"
  }, []);

  return (
    <div>
      <div className="home">
        <Navbar/>
        <div className="video-container"> 
          <video controls autoPlay muted className="video">
            <source src={Trailer} type="video/mp4" />
          </video>
        </div>
        <div className="home-content">
          <div className="community-overview">
            <h2 className="home-title">Uniting Filipino NBA2K Fans: A Community Like No Other</h2>
            <p className="overview">Welcome to our vibrant Filipino community dedicated to playing NBA2K, the popular basketball video game series. We are a diverse group of players, fans, and enthusiasts who share a deep passion for both basketball and gaming. Our community brings together individuals from various backgrounds, age groups, and gaming skill levels, united by our love for the virtual basketball court. At NBA2KLC, we foster a welcoming and engaging environment where players can connect, compete, and collaborate. Whether you're a seasoned pro or just starting your NBA2K journey, you'll find a supportive community that embraces everyone's unique gaming skills and experiences.</p>
          </div>
        </div>
        <LP2 />
      </div>
    </div>
  );
}

export default Home;
