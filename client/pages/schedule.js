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
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 700
  },
  tableCell: {
    borderLeft: "1px solid lightgray",
    width: "13%",
    padding: "1rem",
    "&:hover": {
      background: "rgba(200, 200, 200, 0.5)"
    }
  }
});

class Schedule extends Component {
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
      ],
      currentRecipe: "Jalapeno Popper Grilled Cheese Sandwich"
    };
  }

  componentDidMount() {
    const { days } = this.state;

    const schedule = {};

    days.forEach((day, idx) => {
      schedule[day.toLowerCase()] = { breakfast: "", lunch: "", dinner: "" };
    });

    this.setState({ schedule: schedule });
  }

  addToSchedule = (day, type) => {
    const copy = this.state.schedule;

    if (copy[day][type] === "") {
      copy[day][type] = this.state.currentRecipe;
    } else {
      copy[day][type] = "";
    }

    this.setState(copy);
  };

  render() {
    const { classes } = this.props;
    const { schedule, days } = this.state;

    console.log("state: ", this.state);

    return (
      <Layout>
        <div className="py2 px4">
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell />
                  {days.map((day, idx) => {
                    return <TableCell>{day.slice(0, 3)}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              {schedule && (
                <TableBody>
                  <TableRow>
                    <TableCell>Breakfast</TableCell>
                    {days.map((day, idx) => {
                      return (
                        <TableCell
                          className={classes.tableCell}
                          key={idx}
                          id={`${
                            schedule[day.toLowerCase()].breakfast.length > 0
                              ? "tablecell-breakfast"
                              : ""
                          }`}
                          onClick={() =>
                            this.addToSchedule(day.toLowerCase(), "breakfast")
                          }
                        >
                          {schedule[day.toLowerCase()].breakfast}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell>Lunch</TableCell>
                    {days.map((day, idx) => {
                      return (
                        <TableCell
                          className={classes.tableCell}
                          key={idx}
                          id={`${
                            schedule[day.toLowerCase()].lunch.length > 0
                              ? "tablecell-lunch"
                              : ""
                          }`}
                          onClick={() =>
                            this.addToSchedule(day.toLowerCase(), "lunch")
                          }
                        >
                          {schedule[day.toLowerCase()].lunch}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell>Dinner</TableCell>
                    {days.map((day, idx) => {
                      return (
                        <TableCell
                          className={classes.tableCell}
                          key={idx}
                          id={`${
                            schedule[day.toLowerCase()].dinner.length > 0
                              ? "tablecell-dinner"
                              : ""
                          }`}
                          onClick={() =>
                            this.addToSchedule(day.toLowerCase(), "dinner")
                          }
                        >
                          {schedule[day.toLowerCase()].dinner}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </Paper>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Schedule);
