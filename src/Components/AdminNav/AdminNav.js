import React, {useState} from "react";
import logo from "../../img/2KLC_logo.png";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar main" style={{textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div className="navbar-logo" >
        <a href="adminboard" className="navbar-lebrown-city-link"><img src={logo} alt="2KLC Logo" style={{ width: "150px", height: "auto" }} />
        <h2 className="display-5">Lebrown City</h2></a>
      </div>
      <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'bi bi-x' : 'bi bi-list'} />
      </div>
      <div className={click ? 'nav-menu active' : 'nav-menu'}>
        <a href="login" className="navbar-link h5" onClick={closeMobileMenu}>Log out</a>
      </div>
    </nav>
  );
};

export default Navbar;