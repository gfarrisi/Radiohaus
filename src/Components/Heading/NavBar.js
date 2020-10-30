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
    fontSize: '8px',
    color: 'white',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&-selected': {
      color: theme.palette.primary.main,
    },
  },

  buttonGroup: {
    maxWidth: 'fit-content',
  },
}));

const Styles = styled.div`
  width: 100%;
  max-width: 300px;
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
          className={classes.buttonGroup}
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
