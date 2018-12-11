import React, { Component } from "react";
import Link from "next/link";
import Search from "../components/Search";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
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
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

class Header2 extends Component {
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
                  fontSize="large"
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
        {searchBarOpen && <Search />}
      </div>
    );
  }
}

export default withStyles(styles)(Header2);
