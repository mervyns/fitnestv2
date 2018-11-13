import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
