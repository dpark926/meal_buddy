import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import red from "@material-ui/core/colors/red";

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
  },
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
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
          <GridList cols={2}>
            {this.state.data.recipes.map(recipe => {
              return (
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={recipe.title}
                    subheader={recipe.publisher}
                  />
                  <CardMedia
                    className={classes.media}
                    image={recipe.image_url}
                    title={recipe.title}
                  />
                </Card>
              );
            })}
          </GridList>
        )}
      </div>
    );
  }
}

// <CardContent>
//   <Typography component="p">
//     This impressive paella is a perfect party dish and a fun
//     meal to cook together with your guests. Add 1 cup of
//     frozen peas along with the mussels, if you like.
//   </Typography>
// </CardContent>

export default withStyles(styles)(recipes);
