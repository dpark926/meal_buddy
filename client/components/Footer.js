import Link from "next/link";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  toolbarMain: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    bottom: 0,
    width: "100%",
    background: "white"
  },
  toolbarTitle: {
    display: "flex",
    flex: 1
  }
});

const Footer = props => {
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
              fontSize="default"
            />
            <span className="bold">MEAL</span>BUDDY
          </a>
        </Link>
      </Typography>
    </Toolbar>
  );
};

export default withStyles(styles)(Footer);
