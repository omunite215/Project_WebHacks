import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Navbar contactActivityStatus="active border-bottom border-3 border-info rounded-0" />
        <div id="pageTitleColor">
        <p className="ms-2 fs-1 fw-bold" id="pageTitleColor">Contact</p>
        <div className="container my-5 fs-2 fw-semibold">
            Name: Om Patel<br/>
          Email: <a href="mailto: omunite21@gmail.com">omunite21@gmail.com</a><br/>
          Specializations: UI/UX Design and Front-End Web Development
        </div>
        </div>
      </>
    );
  }
}
