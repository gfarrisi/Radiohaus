import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Button } from '@material-ui/core';
import Header from '../Components/Heading/Header'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#010000',
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    color: '#FF96D5',
  },
  logo: {
    width: '100%',
    marginBottom: '0'
  },
  socialContainer:{
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
    fontSize: '18px'
  },
  footer: {
    fontSize: '14px'
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Header></Header>
      {/* <div>
        <img
          className={classes.logo}
          src='/images/Radiohaus-logo-glow.png'
          alt='main-logo'
        />
      </div> */}
      <div className={classes.socialContainer}>

       <a
        href='https://www.instagram.com/theradiohaus/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button color='primary' variant='contained' >
          <InstagramIcon /><br></br><div className={classes.social}> Follow us on Instagram!</div>  
        </Button>
        
      </a>
    <div>
       </div>
      
     
      
    </div>
      
      <span className={classes.footer}>&#169; RADIOHAUS 2020</span> 
    </div>
  );
}
