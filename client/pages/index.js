import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import Typography from "@material-ui/core/Typography";
import ingredients from "../src/ingredients";
import { autoComplete } from "../util/functions";

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

class index extends Component {
  constructor() {
    super();
    this.state = { list: [], item: "", checked: [] };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { item } = this.state;
    e.preventDefault();
    if (item !== "") {
      const listCopy = this.state.list;
      listCopy.push(this.state.item);
      this.setState({ list: listCopy, item: "" });
    }
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  addToList = ingredient => {
    console.log(ingredient);
    const listCopy = this.state.list;
    listCopy.push(ingredient.name);
    this.setState({ list: listCopy, item: "" });
  };

  deleteItem = item => {
    const { list } = this.state;
    const listCopy = list;
    const index = listCopy.indexOf(item);
    if (index > -1) {
      listCopy.splice(index, 1);
    }
    this.setState({ list: listCopy });
  };

  render() {
    const { classes } = this.props;
    const { item, list } = this.state;

    return (
      <div>
        <main className={classes.layout}>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={this.onSubmit}
          >
            <TextField
              id="standard-name"
              label="Search for item"
              name="item"
              variant="outlined"
              className={classes.textField}
              value={this.state.item}
              onChange={this.handleChange}
              margin="normal"
            />
          </form>
          <div>
            <Typography variant="h5" component="h2">
              My Shopping List
            </Typography>
            <List>
              {list.map((item, idx) => {
                return (
                  <ListItem
                    key={idx}
                    role={undefined}
                    dense
                    button
                    onClick={this.handleToggle(idx)}
                  >
                    <Checkbox
                      checked={this.state.checked.indexOf(idx) !== -1}
                      tabIndex={-1}
                      disableRipple
                    />
                    <ListItemText primary={item} />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Comments">
                        <CommentIcon onClick={() => this.deleteItem(item)} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
            <List>
              {autoComplete(ingredients, item)
                .slice(0, 5)
                .map((ingredient, idx) => {
                  return (
                    <ListItem
                      button
                      key={idx}
                      onClick={() => this.addToList(ingredient)}
                    >
                      <ListItemText primary={ingredient.name} />
                    </ListItem>
                  );
                })}
            </List>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(index);
