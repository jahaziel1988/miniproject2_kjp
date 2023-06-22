import "bootstrap/dist/css/bootstrap.css";
import logo from "../../img/2KLC_logo.png";
import './Home.css'
function Home() {
  return (
    <div>
      <nav className="navbar navbar-bg-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="45" height="35" class="d-inline-block align-text-bottom">

            </img>
            <h1 className="">LeBrown City</h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Home;
