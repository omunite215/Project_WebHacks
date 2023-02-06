import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="position-absolute top-50 start-50">
        <img
          src={require("../images/loading.gif")}
          width="64"
          height="64"
          alt="Loading..."
        ></img>
      </div>
    );
  }
}
