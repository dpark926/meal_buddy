import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  }
});

class recipes extends Component {
  constructor() {
    super();
    this.state = { item: "" };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchData = e => {
    this.setState({ isLoading: true });
    e.preventDefault();
    console.log(encodeURI(this.state.item));
    console.log(encodeURIComponent(this.state.item));

    // fetch(API + DEFAULT_QUERY)
    fetch(
      `https://www.food2fork.com/api/search?key=8e73a901d0a38651d2c893e07ac7a753&q=${encodeURI(
        this.state.item
      )}`
    )
      .then(response => response.json())
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);

    return (
      <div>
        <h1>recipes</h1>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.fetchData}
        >
          <TextField
            id="standard-name"
            label="Search for recipe"
            name="item"
            className={classes.textField}
            value={this.state.item}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
          </Button>
        </form>
        {this.state.data && (
          <div>
            {this.state.data.recipes.map(recipe => {
              return (
                <div className="border" key={recipe.recipe_id}>
                  <a href={recipe.source_url}>
                    <img src={recipe.image_url} height="42" width="42" />
                    <div>{recipe.publisher}</div>
                    <div>{recipe.title}</div>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(recipes);
