import React, { Component } from "react";
import Link from "next/link";

class Hero extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="flex border" style={{ background: "#b0e0e6" }}>
        <div
          className="flex col-6"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <h1 style={{ color: "white" }}>Hero</h1>
        </div>
        <div className="col-6">
          <img src="https://images.unsplash.com/photo-1512389180939-34b58175adff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
    );
  }
}

export default Hero;
