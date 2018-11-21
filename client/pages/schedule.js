import React, { Component } from "react";
import Layout from "../components/Layout";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { currentWeek } from "../util/functions";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class schedule extends Component {
  constructor() {
    super();
    this.state = {
      thisWeek: currentWeek(),
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  }

  componentDidMount() {
    const { days } = this.state;

    const sche = {};

    days.forEach((day, idx) => {
      sche[day.toLowerCase()] = { breakfast: "hey", lunch: "", dinner: "" };
    });

    this.setState(sche);
  }

  addToMon = () => {
    console.log("hey");
  };

  render() {
    const { classes } = this.props;
    const {
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      days
    } = this.state;

    console.log(this.state);
    console.log(sunday);

    return (
      <Layout>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Breakfast</TableCell>
                <TableCell>Lunch</TableCell>
                <TableCell>Dinner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {days.map((day, idx) => {
                return (
                  <TableRow className="border" key={idx}>
                    <TableCell>{day.slice(0, 3)}</TableCell>
                    <TableCell onClick={this.addToMon}>
                      {day.breakfast}
                    </TableCell>
                    <TableCell>{day.lunch}</TableCell>
                    <TableCell>{day.dinner}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Layout>
    );
  }
}

// {thisWeek.map((day, idx) => {
//   return (
//     <TableRow className="border" key={idx}>
//       <TableCell>{day.day.slice(0, 3)}</TableCell>
//       <TableCell>{day.breakfast}</TableCell>
//       <TableCell>{day.lunch}</TableCell>
//       <TableCell>{day.dinner}</TableCell>
//     </TableRow>
//   );
// })}

export default withStyles(styles)(schedule);
