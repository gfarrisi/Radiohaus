import React, { useEffect, useState } from 'react';
import { getEvents } from './EventContainer/services';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Components/Events/EventCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  gridContainer: {},
  gridItem: {
    margin: theme.spacing(4),
  },
}));

const Events = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setLoading(true);
    getEvents().then(({ data }) => {
      setEvents(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className={classes.root}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          {events.map((event) => (
            <Grid className={classes.gridContainer} container spacing={5}>
              <Grid className={classes.gridItem} item xs={12}>
                <Card {...event} />
              </Grid>
            </Grid>
          ))}
        </Container>
      )}
    </div>
  );
};

Events.propTypes = {};

export default Events;
