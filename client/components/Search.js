import React, { Component, Fragment } from "react";
import Router from "next/router";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipeActions";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      width: 640
    },
    margin: "auto"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    margin: "1rem"
  }
});

class Search extends Component {
  constructor() {
    super();
    this.state = { searchRecipe: "" };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchRecipe = e => {
    e.preventDefault();

    // fetch(API + DEFAULT_QUERY)
    this.props.getRecipes(encodeURI(this.state.item));
    this.props.toggleSearchBar();

    Router.push("/recipes");
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.searchRecipe}
      >
        <TextField
          id="standard-name"
          label="Search for recipe"
          name="item"
          variant="outlined"
          className={classes.textField}
          value={this.state.item}
          onChange={this.handleChange}
          margin="normal"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            )
          }}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return state.list;
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getRecipes }
  )(Search)
);
