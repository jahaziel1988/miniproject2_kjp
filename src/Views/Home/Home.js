import "bootstrap/dist/css/bootstrap.css";
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Footer/>
    </div>
  );
}

export default Home;
