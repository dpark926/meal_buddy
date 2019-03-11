import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Schedule from "../components/Schedule";
import { withRouter } from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { getItems, addItems } from "../actions/itemActions";

const styles = theme => ({
  recipeImg: {
    width: "100%"
  }
});

class Post extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { router } = this.props;

    this.props.getItems();

    console.log(router);
    fetch(
      `https://www.food2fork.com/api/get?key=8e73a901d0a38651d2c893e07ac7a753&rId=${
        router.query.id
      }`
    )
      .then(response => response.json())
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  addToList = () => {
    const { data } = this.state;

    // this.setState({ list: data.recipe });
    this.props.addItems(data.recipe);
    console.log(data.recipe);
  };

  render() {
    const { router, classes } = this.props;
    const { data } = this.state;

    return (
      <Layout>
        {data ? (
          <div className="flex p2">
            <div className="col-6 px3">
              <Link href={data.recipe.source_url}>
                <a>
                  <div className="m2 center col-12">
                    <img
                      src={data.recipe.image_url}
                      className={classes.recipeImg}
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-6 p2">
              <div className="border-bottom center">
                <Link href={data.recipe.source_url}>
                  <a className="h2 center">{data.recipe.title}</a>
                </Link>
                <p className="h4 center">From: {data.recipe.publisher}</p>
              </div>
              <Schedule />
              <List>
                <p className="h3">Ingredients</p>
                {data.recipe.ingredients.map((ingredient, idx) => {
                  return (
                    <ListItem key={idx} role={undefined} dense button>
                      <ListItemText primary={ingredient} />
                    </ListItem>
                  );
                })}
              </List>
              <button onClick={this.addToList}>Add to Favorite</button>
              <button onClick={this.addToList}>
                Add Ingredients to Shopping List
              </button>
            </div>
          </div>
        ) : (
          <div className="m4 center">
            <CircularProgress className={classes.progress} />
            <button onClick={this.addToList}>Add to List</button>
          </div>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { getItems, addItems }
    )(Post)
  )
);
