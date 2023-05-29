import React from "react";
import {Link} from "react-router-dom";
import Logo from "../Assets/calendlylogo.png";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col-md-12 navbar">
        <div style={{ display: "flex", marginTop: "20px" }}>
          <Link to="/">
            <img src={Logo} style={{marginLeft:"10rem", height: "50px" }} alt="calendlyLogo" />
          </Link>
          <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/individuals">Individuals</Link>
            <Link to="/team">Team</Link>
            <Link to="/enterprise">Enterprise</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar