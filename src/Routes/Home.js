import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#010000',
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    color: '#FF96D5',
    minHeight: '500px',
  },

  socialContainer: {
    width: '90%',
    textAlign: 'center',
    marginBottom: '200px',
  },
  social: {
    color: 'black',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingLeft: '10px',
    fontSize: '18px',
  },

}));

export default function ContainedButtons() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
