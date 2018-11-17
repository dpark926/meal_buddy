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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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
      minWidth: 250,
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
  },
  toggle: {
    position: "absolute",
    display: "flex",
    opacity: 0,
    "&:hover": {
      opacity: 1
    }
  }
});

class ShoppingList extends Component {
  constructor() {
    super();
    this.state = { list: [], item: "", checked: [], listOpen: false };
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

  onToggle = () => {
    const { listOpen } = this.state;
    this.setState({
      listOpen: !listOpen
    });
  };

  render() {
    const { classes } = this.props;
    const { item, list, listOpen } = this.state;

    return (
      <div
        className="flex"
        style={{
          height: "calc(100vh - 64px)",
          width: !listOpen && 0,
          borderRight: "1px solid lightgray"
        }}
      >
        <main
          className={classes.layout}
          style={{ display: !listOpen ? "none" : "block" }}
        >
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={this.onSubmit}
          >
            <TextField
              id="standard-name"
              label="Add ingredient"
              name="item"
              variant="outlined"
              className={classes.textField}
              value={this.state.item}
              onChange={this.handleChange}
              margin="normal"
            />
          </form>
          <div className="p2">
            <Typography variant="h5" component="h5" align="center">
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
        <div className="relative" onClick={this.onToggle}>
          <div
            className={classes.toggle}
            style={{ top: "-64px", height: "100vh", alignItems: "center" }}
          >
            {listOpen ? (
              <div
                className="py2 px1"
                style={{
                  background: "#2196f3",
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px"
                }}
              >
                <ChevronLeftIcon style={{ color: "white" }} fontSize="large" />
              </div>
            ) : (
              <div
                className="py2 px1"
                style={{
                  background: "#2196f3",
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px"
                }}
              >
                <ChevronRightIcon style={{ color: "white" }} fontSize="large" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ShoppingList);