import React, { Component, Fragment } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";

class register extends Component {
  render() {
    return (
      <div
        className="center p4"
        style={{ maxWidth: 400, marginLeft: "auto", marginRight: "auto" }}
      >
        <h1>register</h1>
        <form className="col-12 flex flex-column ">
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="first_name">First Name</InputLabel>
            <Input
              id="first_name"
              name="first_name"
              autoComplete="first_name"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="last_name">Last Name</InputLabel>
            <Input
              id="last_name"
              name="last_name"
              autoComplete="last_name"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Reconfirm Password</InputLabel>
            <Input
              name="reconfirm_password"
              type="reconfirm_password"
              id="reconfirm_password"
              autoComplete="current-password"
            />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
          <Link href="/login">
            <Button variant="contained" color="secondary">
              Log in
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default register;
