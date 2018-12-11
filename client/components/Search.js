import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
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
    width: "100%"
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

    // fetch(
    //   `${keys.food2forkAPI}key=${keys.food2forkAPIKey}&q=${encodeURI(
    //     this.state.item
    //   )}`
    // )
    //   .then(response => response.json())
    //   .then(data => this.setState({ data, isLoading: false }))
    //   .catch(error => this.setState({ error, isLoading: false }));
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

export default withStyles(styles)(Search);
