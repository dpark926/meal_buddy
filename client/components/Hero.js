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
      <main className="flex">
        <div className="hero-section flex flex-column justify-center items-end">
          <div className="hero-left">
            <h1 className="hero-header h1">
              Simple Way to Organize Your Inspirations
            </h1>
            <p className="hero-tagline h2">
              I think what motivates people is not great hate, but great love
              for other people.
            </p>
          </div>
        </div>
        <div className="hero-section flex flex-column justify-center">
          <div className="hero-right">
            <form className="flex flex-column" onSubmit={this.onSubmit}>
              <label className="center h3 p3">SIGN UP FOR FREE</label>
              <input
                name="name"
                id="name"
                placeholder="Name"
                className="h4 p2 input"
                onChange={this.handleChange}
              />
              <input
                name="email"
                id="email"
                placeholder="Email"
                className="h4 p2 input"
                onChange={this.handleChange}
              />
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                className="h4 p2 input"
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className="signup-btn pointer border-none h3 p2"
              >
                Sign up
              </button>
            </form>
            <div className="center p2">
              <p className="dark-white">By clicking "Sign up" I agree to our</p>
              <Link href="#" rel="canonical">
                <a className="link">Terms of Service</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Hero;
