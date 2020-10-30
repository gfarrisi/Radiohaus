import React from 'react';
// import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    color: 'white',
  },
  button: {
    color: 'white',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&-selected': {
      color: theme.palette.primary.main,
    },
  },
}));

const Styles = styled.div`
  .Mui-selected {
    color: #ff96d5;
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
        >
          {routes.map(({ route, name }) => {
            return (
              <ToggleButton
                value={name}
                key={name}
                id={name}
                className={classes.button}
                color={'primary'}
                component={Link}
                to={route}
              >
                {name}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </div>
    </Styles>
  );
};

NavBar.propTypes = {};

export default NavBar;
