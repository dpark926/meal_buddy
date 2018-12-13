import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ShoppingList from "../components/ShoppingList";

class Layout extends Component {
  constructor() {
    super();
    this.state = { listOpen: false };
  }

  onToggle = () => {
    const { listOpen } = this.state;
    this.setState({
      listOpen: !listOpen
    });
  };

  render() {
    const { children } = this.props;
    const { listOpen } = this.state;

    return (
      <div style={{ background: "white" }}>
        <Header />
        <div
          className="absolute col-12"
          style={{ paddingTop: 64, background: "white" }}
        >
          <div className="flex mb4 overflow-hidden">
            <ShoppingList onToggle={this.onToggle} listOpen={listOpen} />
            <div style={{ flexGrow: 5, paddingLeft: listOpen && 250 }}>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
