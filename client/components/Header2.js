import Link from "next/link";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    position: "fixed",
    width: "100%",
    background: "white",
    zIndex: 10
  },
  toolbarTitle: {
    display: "flex",
    flex: 1
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

const Header2 = props => {
  const { classes } = props;
  return (
    <Toolbar className={classes.toolbarMain}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="left"
        noWrap
        className={classes.toolbarTitle}
      >
        <Link href="/">
          <a className="flex" style={{ alignItems: "center" }}>
            <ShoppingBasketIcon
              style={{ color: "red" }}
              className="mr1"
              fontSize="large"
            />
            <span className="bold">MEAL</span>BUDDY
          </a>
        </Link>
      </Typography>
      <Link href="/register">
        <a className="mr1">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </a>
      </Link>
      <Link href="/login">
        <a>
          <Button size="small">Login</Button>
        </a>
      </Link>
    </Toolbar>
  );
};

export default withStyles(styles)(Header2);
