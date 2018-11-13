import Link from "next/link";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  }
});

const Header2 = props => {
  const { classes } = props;
  return (
    <Toolbar className={classes.toolbarMain}>
      <Link href="/recipes">
        <a>
          <Button size="small">Recipes</Button>
        </a>
      </Link>
      <Link href="/schedule">
        <a>
          <Button size="small">Schedule</Button>
        </a>
      </Link>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
      >
        <Link href="/">
          <a>Meal Buddy</a>
        </Link>
      </Typography>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Link href="/register">
        <a>
          <Button size="small">Register</Button>
        </a>
      </Link>
      <Link href="/login">
        <a>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </a>
      </Link>
    </Toolbar>
  );
};

export default withStyles(styles)(Header2);
