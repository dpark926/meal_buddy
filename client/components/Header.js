import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Header = () => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <div>icon</div>
          </div>
          <div>
            <Link href="/login">Log In</Link>
            <Link href="/register">
              <Button variant="contained" color="primary">
                Register
              </Button>
            </Link>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
