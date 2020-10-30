import React from 'react';
// import PropTypes from 'prop-types';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: '40%',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src='/images/Radiohaus-logo-glow-header.png'
        alt='header'
      />
      <NavBar />
    </div>
  );
};

Header.propTypes = {};

export default Header;
