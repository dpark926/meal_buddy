import React, { Component, Fragment } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Hero />
        <div>Homepage</div>
      </Layout>
    );
  }
}

export default index;
