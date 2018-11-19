import Layout from "../components/Layout";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const sche = [
  {
    day: "Mon",
    breakfast: "",
    lunch: "",
    dinner: ""
  },
  {
    day: "Tue",
    breakfast: "",
    lunch: "",
    dinner: ""
  },
  {
    day: "Wed",
    breakfast: "",
    lunch: "",
    dinner: ""
  },
  {
    day: "Thur",
    breakfast: "",
    lunch: "",
    dinner: ""
  },
  {
    day: "Fri",
    breakfast: "",
    lunch: "",
    dinner: ""
  }
];

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

const schedule = props => {
  const { classes } = props;

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
            {sche.map((day, idx) => {
              return (
                <TableRow className="border" key={idx}>
                  <TableCell>{day.day}</TableCell>
                  <TableCell>{day.breakfast}</TableCell>
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
};

export default withStyles(styles)(schedule);
