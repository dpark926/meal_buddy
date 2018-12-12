import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import ingredientList from "../src/ingredients";
import { autoComplete, sortShoppingList } from "../util/functions";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";

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
    flexWrap: "wrap",
    marginTop: "0.5rem",
    marginBottom: "0.5rem"
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
    listCopy.push(ingredient);
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
    const { classes, onToggle, listOpen } = this.props;
    const { item, list } = this.state;

    console.log(this.state);
    console.log(this.props);

    let allIngredients = [];

    for (let i = 0; i < this.props.list.length; i++) {
      allIngredients = [...allIngredients, ...this.props.list[i].ingredients];
    }

    console.log(allIngredients);

    let result = [];

    if (ingredientList && this.props.list.length !== 0) {
      result = ingredientList.filter(ingredient => {
        return allIngredients
          .join(" ")
          .toLowerCase()
          .includes(ingredient.name);
      });
    }

    console.log(result);

    // const newNewList = [...newList, ...result];
    //
    // console.log(newNewList);

    const sortedList = sortShoppingList([...list, ...result]);
    const newList = [];

    for (let key in sortedList) {
      newList.push(key);
      for (let i = 0; i < sortedList[key].length; i++) {
        newList.push(sortedList[key][i]);
      }
    }

    return (
      <div
        className="flex fixed"
        style={{
          height: "calc(100vh - 64px)",
          width: !listOpen && 0,
          flexGrow: listOpen && 1,
          borderRight: "1px solid lightgray"
        }}
      >
        <Slide direction="right" in={listOpen} mountOnEnter unmountOnExit>
          <main className={classes.layout}>
            {this.props.list &&
              this.props.list.map((recipe, idx) => {
                return (
                  <div key={idx}>
                    <p>{recipe.title}</p>
                  </div>
                );
              })}
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
            {item && (
              <div
                className="absolute px1 col-12"
                style={{ background: "white", marginTop: -8, zIndex: 1 }}
              >
                <List>
                  {autoComplete(ingredientList, item)
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
            )}
            <div className="px2">
              <Typography variant="h6" component="h6" align="left">
                My Shopping List
              </Typography>
              <List
                style={{
                  overflow: "auto",
                  height: "calc(100vh - 200px)"
                }}
              >
                {newList.map((item, idx) => {
                  const strikethrough = this.state.checked.includes(idx);

                  if (typeof item === "string") {
                    return (
                      <div className="category-border" key={idx}>
                        <Typography variant="h6" component="h6" align="left">
                          {item}
                        </Typography>
                      </div>
                    );
                  } else {
                    return (
                      <ListItem
                        key={idx}
                        role={undefined}
                        dense
                        button
                        onClick={this.handleToggle(idx)}
                        style={{ padding: 0 }}
                      >
                        <Checkbox
                          checked={this.state.checked.indexOf(idx) !== -1}
                          tabIndex={-1}
                          disableRipple
                        />
                        <ListItemText
                          primary={item.name}
                          style={{
                            textDecoration: strikethrough && "line-through"
                          }}
                        />
                        <ListItemSecondaryAction>
                          <IconButton aria-label="Comments">
                            <DeleteOutlineIcon
                              onClick={() => this.deleteItem(item)}
                            />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  }
                })}
              </List>
            </div>
          </main>
        </Slide>
        <div className="relative" onClick={onToggle}>
          <div
            className={classes.toggle}
            style={{ top: "-64px", height: "100vh", alignItems: "center" }}
          >
            {listOpen ? (
              <div
                className="py1"
                style={{
                  background: "#2196f3",
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px"
                }}
              >
                <ChevronLeftIcon
                  style={{ color: "white" }}
                  fontSize="default"
                />
              </div>
            ) : (
              <div
                className="py1"
                style={{
                  background: "#2196f3",
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px"
                }}
              >
                <ChevronRightIcon
                  style={{ color: "white" }}
                  fontSize="default"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.list;
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getItems }
  )(ShoppingList)
);
