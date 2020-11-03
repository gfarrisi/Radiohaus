import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#010000',
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    minHeight: '700px',
    height: 'fit-content',
    color: '#FF96D5',
  },
  spotify: {
    maxWidth: '800px',
    margin: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      maxWidth: '200px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '600px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '400px',
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    margin: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      maxWidth: '200px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '600px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '400px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.imageContainer}>
        <img
          className={classes.image}
          src='/images/BannerHaus.jpg'
          alt='banner'
        />
      </Container>
      <Container className={classes.spotify}>
        <SpotifyPlayer
          uri='spotify:album:1TIUsv8qmYLpBEhvmBmyBk'
          size={size}
          view={view}
          theme={theme}
        />
      </Container>
    </div>
  );
};

export default Home;
