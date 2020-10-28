import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Button } from '@material-ui/core';

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
    textAlign: 'center',
  },
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

      <a
        href='https://www.instagram.com/theradiohaus/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button color='primary' variant='contained'>
          <InstagramIcon />
        </Button>
      </a>
    </div>
  );
}
