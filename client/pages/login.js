import React, { Component, Fragment } from "react";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

class login extends Component {
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className="flex flex-column p4">
        <h1>login</h1>
        <TextField
          id="standard-name"
          label="Username"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Password"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
        />
        <Button variant="contained" color="primary">
          Log In
        </Button>
        <div className="flex mt2 mb2">
          <Link href="/register">
            <Button variant="contained" color="secondary">
              Register
            </Button>
          </Link>
          <Button variant="contained" color="secondary">
            Forgot Password
          </Button>
        </div>
      </div>
    );
  }
}

export default login;
