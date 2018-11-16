import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    const { router } = this.props;
    const { data } = this.state;
    console.log(this.state);

    return (
      <div>
        {data && (
          <div>
            <Link href={data.recipe.source_url}>
              <a>
                <img src={data.recipe.image_url} height="150" width="150" />
                <p>{data.recipe.title}</p>
                <p>From: {data.recipe.publisher}</p>
              </a>
            </Link>
            <List>
              <p>Ingredients</p>
              {data.recipe.ingredients.map((ingredient, idx) => {
                return (
                  <ListItem key={idx} role={undefined} dense button>
                    <ListItemText primary={ingredient} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Post);
