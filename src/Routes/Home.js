import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: 'black',
    display: 'grid',
    placeItems: 'center',
  },
  logo: {},
  heading: {
    color: 'pink',
    textAlign: 'center'
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <img
          className={classes.logo}
          src='/images/mainLogo.png'
          alt='main-logo'
        />
        <h2 className={classes.heading}>Coming Soon..</h2>
      </div>
    </div>
  );
}
