import React, { Component, Fragment } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import CircularProgress from "@material-ui/core/CircularProgress";
import red from "@material-ui/core/colors/red";
import { keys } from "../config/keys";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipeActions";

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

  card: {
    width: 300
  },
  content: {
    height: 110
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

class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { recipesData } = this.props;

    if (recipesData.length === 0) {
      console.log("recipes api call");
      this.props.getRecipes();
    }
  }

  render() {
    const { classes, recipesData } = this.props;

    return (
      <Layout>
        <div className="flex" style={{ justifyContent: "center" }}>
          {recipesData ? (
            <Grid item xs={12}>
              <Grid container justify="center" spacing={Number(16)}>
                {recipesData.recipes &&
                  recipesData.recipes.map((recipe, idx) => {
                    return (
                      <Grid item key={idx}>
                        <Link href={`/post?id=${recipe.recipe_id}`}>
                          <a>
                            <Card className={classes.card}>
                              <CardContent className={classes.content}>
                                <Typography component="h6" variant="subtitle1">
                                  {recipe.title}
                                </Typography>
                                <Typography
                                  variant="subtitle2"
                                  color="textSecondary"
                                >
                                  {recipe.publisher}
                                </Typography>
                              </CardContent>
                              <CardMedia
                                className={classes.media}
                                image={recipe.image_url}
                                title={recipe.title}
                              />
                            </Card>
                          </a>
                        </Link>
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
  return state.recipe;
};

// <CardContent>
//   <Typography component="p">
//     This impressive paella is a perfect party dish and a fun
//     meal to cook together with your guests. Add 1 cup of
//     frozen peas along with the mussels, if you like.
//   </Typography>
// </CardContent>

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getRecipes }
  )(index)
);
