import React, { Component } from "react";
import Link from "next/link";
import "../styles/homepage.scss";

class Hero extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main className="p4">
        <div className="bg-container flex">
          <div className="hero-section flex flex-column justify-center border py4">
            <h1 className="hero-header h1">Eat Thoughtfully, live joyfully</h1>
            <p className="hero-tagline h2">
              Join our food community and browse recipes
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Hero;
