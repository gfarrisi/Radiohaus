import React from 'react';
// import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    color: 'white',
  },
  button: {
    fontSize: '16px',
    fontFamily: 'BlinkMacSystemFont',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: theme.spacing(4),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&-selected': {
      color: theme.palette.primary.main,
    },
  },
  grid: {
    textAlign: 'center',
    justifyContent: 'space-evenly',
  },
  gridItem: {
    [theme.breakpoints.down('xs')]: {
      padding: '0px',
    },
  },
}));

const Styles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .Mui-selected {
    color: #ff96d5;
  }

  .MuiGrid-spacing-xs-6 > .MuiGrid-item {
    padding: 0px;
  }
`;

const routes = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/Events',
    name: 'Events',
  },
  {
    route: '/Blog',
    name: 'Blog',
  },
  {
    route: '/Gallery',
    name: 'Gallery',
  },
  {
    route: '/Submissions',
    name: 'Submissions',
  },
];

const NavBar = (props) => {
  const classes = useStyles();

  const [buttonName, setButtonName] = React.useState('Home');
  const handlebuttonName = (event, newButton) => {
    if (newButton !== null) {
      setButtonName(newButton);
    }
  };

  return (
    <Styles>
      <div className={classes.root}>
        <ToggleButtonGroup
          value={buttonName}
          exclusive
          onChange={handlebuttonName}
          className={classes.buttonGroup}
        >
          <Grid className={classes.grid} container spacing={6}>
            {routes.map(({ route, name }) => {
              return (
                <Grid
                  key={name}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={2}
                  className={classes.gridItem}
                >
                  <Button
                    value={name}
                    id={name}
                    className={classes.button}
                    color={'primary'}
                    component={Link}
                    to={route}
                  >
                    {name}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </ToggleButtonGroup>
      </div>
    </Styles>
  );
};

NavBar.propTypes = {};

export default NavBar;
