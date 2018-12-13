import React, { Component, Fragment } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import red from "@material-ui/core/colors/red";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipeActions";
import { addBookmark } from "../actions/bookmarkActions";

const styles = theme => ({
  card: {
    width: 300,
    position: "relative",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  content: {
    height: 110,
    display: "flex"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  avatar: {
    backgroundColor: red[500]
  },
  bookmark: {
    padding: 0,
    height: 0,
    "&:hover": {
      color: "red"
    }
  }
});

class recipes extends Component {
  constructor() {
    super();
    this.state = { sortBy: "popular" };
  }

  componentDidMount() {
    const { recipesData } = this.props;

    if (recipesData.length === 0) {
      this.props.getRecipes("", this.state.sortBy);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.sortBy !== e.target.value) {
      this.props.getRecipes("", e.target.value);
    }
  };

  bookmark = recipe => {
    console.log(recipe);
    this.props.addBookmark(recipe);
  };

  componentDidUpdate(prevProps) {
    console.log("HEY");
    console.log(this.props.bookmarksData);
    console.log(prevProps.bookmarksData);
    if (this.props.bookmarksData !== prevProps.bookmarksData) {
      this.render();
    }
  }

  render() {
    const { classes, recipesData, bookmarksData } = this.props;

    console.log(this.props);

    return (
      <Layout>
        <div>
          {bookmarksData.map(recipe => {
            return <div>{recipe.title}</div>;
          })}
        </div>
        <div
          className="flex p2"
          style={{
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <InputLabel>Sort By:</InputLabel>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              value={this.state.sortBy}
              onChange={this.handleChange}
              input={<OutlinedInput labelWidth={0} name="sortBy" />}
            >
              <MenuItem value={"popular"}>Popularity</MenuItem>
              <MenuItem value={"top_rated"}>Top Rated</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex" style={{ justifyContent: "center" }}>
          {recipesData ? (
            <Grid item xs={12}>
              <Grid container justify="center" spacing={Number(16)}>
                {recipesData.recipes &&
                  recipesData.recipes.map((recipe, idx) => {
                    return (
                      <Grid item key={idx}>
                        <Card className={classes.card} id="recipe-card">
                          <CardContent className={classes.content}>
                            <Link href={`/post?id=${recipe.recipe_id}`}>
                              <a className="flex-auto">
                                <div>
                                  <Typography
                                    component="h6"
                                    variant="subtitle1"
                                  >
                                    {recipe.title}
                                  </Typography>
                                  <Typography
                                    variant="subtitle2"
                                    color="textSecondary"
                                  >
                                    {recipe.publisher}
                                  </Typography>
                                </div>
                              </a>
                            </Link>
                            <IconButton
                              className={classes.bookmark}
                              onClick={() => this.bookmark(recipe)}
                            >
                              {bookmarksData.includes(recipe) ? (
                                <BookmarkIcon style={{ color: "red" }} />
                              ) : (
                                <BookmarkBorderIcon />
                              )}
                            </IconButton>
                          </CardContent>
                          <Link href={`/post?id=${recipe.recipe_id}`}>
                            <a className="relative">
                              <CardMedia
                                className={classes.media}
                                image={recipe.image_url}
                                title={recipe.title}
                                id="recipe-card-img"
                              />
                            </a>
                          </Link>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
          ) : (
            <div className="m4">
              <CircularProgress className={classes.progress} />
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { ...state.recipe, ...state.bookmark };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getRecipes, addBookmark }
  )(recipes)
);
