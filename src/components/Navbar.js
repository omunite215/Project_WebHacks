import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Navbar(props) {
  const [mode, setMode] = useState("light");

 const handleMode = ()=>{
  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = "#454A4F";
    document.getElementById("pageTitleColor").style.color = "white";
    const tags = document.querySelectorAll('*[id^="cardColor"]');
for (let i = 0; i < tags.length; i++) {
 tags.item(i).style.backgroundColor = "black";
 tags.item(i).style.color = "white";
}
    
    
  }
  else{
    setMode("light");
    document.body.style.backgroundColor = 'white';
    document.getElementById("pageTitleColor").style.color = "black";
    const tags = document.querySelectorAll('*[id^="cardColor"]');
for (let i = 0; i < tags.length; i++) {
  tags.item(i).style.backgroundColor = "white";
  tags.item(i).style.color = "black";
}
    
  }

  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-5" data-bs-theme={mode}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
    <img
              src={require("../images/blogging.png")}
              alt="Logo"
              width="34"
              height="34"
              className="d-inline-block align-text-top"
            />
    </a>
    <a className={`navbar-brand fw-bolder`} href="/">Web-Hacks</a>
    <label class="switch">
    <input type="checkbox" onClick={handleMode}/>
    <span class="slider"></span>
</label>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item ps-3">
        <Link to="/" className={`nav-link ${props.homeActivityStatus}`}>Home</Link>
        </li>
        <li className="nav-item ps-3">
          <Link to="/Tips" className={`nav-link ${props.tipsActivityStatus}`}>Tips</Link>
        </li>
        <li className="nav-item ps-3">
        <Link to="/About" className={`nav-link ${props.aboutActivityStatus}`}>About</Link>
        </li>
        <li className="nav-item ps-3">
        <Link to="/Contact" className={`nav-link ${props.contactActivityStatus}`}>Contact</Link>
        </li>
        <li className="nav-item d-flex ps-3">
        <img
              src={require("../images/user.png")}
              alt="Logo"
              width="34"
              height="34"
              className="d-inline-block align-text-top mt-1"
            />
          <a className="nav-link ps-2" href="/">Sign In / Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
