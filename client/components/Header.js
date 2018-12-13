import React, { Component } from "react";
import Link from "next/link";
import Search from "../components/Search";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import InputBase from "@material-ui/core/InputBase";
import Collapse from "@material-ui/core/Collapse";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  layout: {
    position: "fixed",
    width: "100%",
    zIndex: 10,
    background: "white",
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    display: "flex",
    flex: 1
  },
  collapse: {
    position: "absolute",
    width: "100%",
    height: "calc(100vh - 64px)",
    background: "rgba(0, 0, 0, 0.5)"
  }
});

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchBarOpen: false
    };
  }

  toggleSearchBar = () => {
    this.setState({
      searchBarOpen: !this.state.searchBarOpen
    });
  };

  render() {
    const { classes } = this.props;
    const { searchBarOpen } = this.state;

    return (
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link href="/">
              <a className="flex" style={{ alignItems: "center" }}>
                <ShoppingBasketIcon
                  style={{ color: "red" }}
                  className="mr1"
                  fontSize="default"
                />
                <span className="bold">MEAL</span>BUDDY
              </a>
            </Link>
          </Typography>
          <IconButton onClick={this.toggleSearchBar}>
            <SearchIcon />
          </IconButton>
          <Link href="/register">
            <a className="mr1">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <Button size="small">Login</Button>
            </a>
          </Link>
        </Toolbar>
        <Collapse in={searchBarOpen}>
          <Search />
          {searchBarOpen && (
            <div className={classes.collapse} onClick={this.toggleSearchBar} />
          )}
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
