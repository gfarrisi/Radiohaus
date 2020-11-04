import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '500px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black',
    border: 'solid #4C63D2',
    fontFamily: 'DoLight',
  },
  image: {
    width: '100%',
  },
  cardDetails: {
    margin: theme.spacing(2),
  },
  icon: {
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  cardButton: {
    color: 'white',
  },
}));

const EventCard = ({ artist, imgUrl, spotifyUrl, instagramUrl, eventDate }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img className={classes.image} src={imgUrl} alt={artist} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h4' component='h4'>
              {artist}
            </Typography>
            <Typography className={classes.cardDetails} variant='body2'>
              {eventDate}
            </Typography>
            <Typography className={classes.cardDetails} variant='body2'>
              7:00PM PST
            </Typography>
            <div className={classes.iconContainer}>
              <a
                className={classes.icon}
                href={instagramUrl}
                target='_blank'
                rel='noreferrer'
              >
                <InstagramIcon />
              </a>
              <a
                className={classes.icon}
                href={instagramUrl}
                target='_blank'
                rel='noreferrer'
              >
                <InstagramIcon />
              </a>
              <a
                className={classes.icon}
                href={instagramUrl}
                target='_blank'
                rel='noreferrer'
              >
                <InstagramIcon />
              </a>
            </div>
            <Button className={classes.cardButton}>
              Click Here Day of for livestream
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

EventCard.propTypes = {
  artist: PropTypes.string.isRequired,
  spotifyUrl: PropTypes.string.isRequired,
  instagramUrl: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
};

export default EventCard;
