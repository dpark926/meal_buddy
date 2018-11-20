import React, { Component } from "react";
import Header2 from "./Header2";
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
        <Header2 />
        <div className="flex" style={{ paddingTop: 64 }}>
          <ShoppingList onToggle={this.onToggle} listOpen={listOpen} />
          <div style={{ flexGrow: 5, paddingLeft: listOpen && 250 }}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
