import * as React from "react";
import { Fragment } from "react";
// import {AppBar, Tabs, Tab} from '"@material-ui/core';
import { AppBar, Toolbar, Button, Link } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

const useStyles =  makeStyles((theme) => ({
    navBar: {
      display: `flex`,
      justifyContent: `space-between`,
      backgroundColor: 'none',
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`,
      fontWeight: '600px',
      fontSize: '50px',
      
    }
}));


const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" >
        <Toolbar className={"linkText"}>
            <Fragment>
              <Button color="inherit" component={Link} to="/login">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/">
                Events
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Blog
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Gallery
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Submissions
              </Button>
            </Fragment>
        </Toolbar>
      </AppBar>
    )
  }
  export default NavBar
