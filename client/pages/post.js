import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { withRouter } from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles from "@material-ui/core/styles/withStyles";

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

  render() {
    const { router, classes } = this.props;
    const { data } = this.state;
    console.log(this.state);

    return (
      <Layout>
        {data && (
          <div className="flex p2">
            <div className="px3 center">
              <Link href={data.recipe.source_url}>
                <a className="h1 center">{data.recipe.title}</a>
              </Link>
              <p className="h4 center">From: {data.recipe.publisher}</p>
              <Link href={data.recipe.source_url}>
                <a>
                  <img
                    src={data.recipe.image_url}
                    className={classes.recipeImg}
                  />
                </a>
              </Link>
            </div>
            <div className="p2">
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
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

export default withRouter(withStyles(styles)(Post));
