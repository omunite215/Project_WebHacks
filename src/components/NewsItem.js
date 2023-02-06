import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <>
        <div className="card my-3" id="cardColor" style={{ width: "18rem" }}>
          <img
            src={!imageUrl? "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg" : imageUrl}
            alt="Logo"
            className="card-img-top"
          />
          <div className="card-body" id="newsCardColor">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">
              {description}
            </p>
            <a rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}
