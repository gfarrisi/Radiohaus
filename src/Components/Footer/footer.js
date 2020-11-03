import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'black',
    textAlign: 'center',
    position: 'absolute',
    margin: 'auto',
    width: '100%',
  },

  footer: {
    color: 'white',
    fontSize: '14px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.footer}>&#169; RADIOHAUS 2020</span>
    </div>
  );
};

export default Footer;
