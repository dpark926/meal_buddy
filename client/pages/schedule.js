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
      sche[day.toLowerCase()] = { breakfast: "", lunch: "", dinner: "" };
    });

    this.setState({ sche: sche });
  }

  addToMon = (day, type, meal) => {
    console.log(day.toLowerCase(), type);

    const copy = this.state.sche;

    copy[day.toLowerCase()][type] = meal;

    this.setState(copy);
  };

  render() {
    const { classes } = this.props;
    const { sche, days } = this.state;

    console.log(this.state);
    console.log(sche);

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
            {sche && (
              <TableBody>
                {days.map((day, idx) => {
                  return (
                    <TableRow className="border" key={idx}>
                      <TableCell>{day.slice(0, 3)}</TableCell>
                      <TableCell
                        onClick={() => {
                          sche[day.toLowerCase()].breakfast === ""
                            ? this.addToMon(
                                day,
                                "breakfast",
                                "Jalapeno Popper Grilled Cheese Sandwich"
                              )
                            : console.log("delete");
                        }}
                      >
                        {sche[day.toLowerCase()].breakfast}
                      </TableCell>
                      <TableCell
                        onClick={() =>
                          this.addToMon(
                            day,
                            "lunch",
                            "Jalapeno Popper Grilled Cheese Sandwich"
                          )
                        }
                      >
                        {sche[day.toLowerCase()].lunch}
                      </TableCell>
                      <TableCell
                        onClick={() =>
                          this.addToMon(
                            day,
                            "dinner",
                            "Jalapeno Popper Grilled Cheese Sandwich"
                          )
                        }
                      >
                        {sche[day.toLowerCase()].dinner}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </Paper>
      </Layout>
    );
  }
}

// {sche && (
//   <TableBody>
//     <TableRow className="border">
//       <TableCell>{days[0].slice(0, 3)}</TableCell>
//       <TableCell onClick={this.addToMon}>
//         {sche.monday.breakfast}
//       </TableCell>
//       <TableCell>{sche.monday.lunch}</TableCell>
//       <TableCell>{sche.monday.dinner}</TableCell>
//     </TableRow>
//   </TableBody>
// )}

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
