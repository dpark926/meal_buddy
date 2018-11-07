import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

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
    e.preventDefault();
    const listCopy = this.state.list;
    listCopy.push(this.state.item);
    this.setState({ list: listCopy, item: "" });
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

  render() {
    const { classes } = this.props;
    const { list } = this.state;
    console.log(this.state);
    return (
      <div>
        <main className={classes.layout}>
          <Title>My page</Title>
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
              Add to List
            </Button>
          </form>
          <div>
            <h1>My List</h1>
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
                        <CommentIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
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
