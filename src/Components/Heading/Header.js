
import * as React from "react";
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    logo: {
      width: '90%',
      marginBottom: '0'
    },
  }));
const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
             <div>
                <img
                    className={classes.logo}
                    src='/images/Radiohaus-logo-glow-header.png'
                    alt='main-logo'
                />
            </div>
           <NavBar/>
        </div>
    
    )
  }
  export default Header