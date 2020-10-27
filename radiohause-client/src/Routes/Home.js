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
      </div>
    </div>
  );
}
