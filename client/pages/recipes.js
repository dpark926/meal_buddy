import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import CircularProgress from "@material-ui/core/CircularProgress";
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
  },
  card: {
    width: 300
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
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class recipes extends Component {
  constructor() {
    super();
    this.state = { item: "" };
  }

  componentDidMount() {
    fetch(
      "https://www.food2fork.com/api/search?key=8e73a901d0a38651d2c893e07ac7a753&"
    )
      .then(response => response.json())
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
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
        {this.state.data ? (
          <Grid item xs={12}>
            <Grid container justify="center" spacing={Number(16)}>
              {this.state.data.recipes.map((recipe, idx) => {
                return (
                  <Grid key={idx} item>
                    <Card className={classes.card}>
                      <CardHeader
                        avatar={
                          <Avatar
                            aria-label="Recipe"
                            className={classes.avatar}
                          >
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
                        style={{ height: 100 }}
                      />
                      <CardMedia
                        className={classes.media}
                        image={recipe.image_url}
                        title={recipe.title}
                      />
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        ) : (
          <div className="flex m4" style={{ justifyContent: "center" }}>
            <CircularProgress className={classes.progress} />
          </div>
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
