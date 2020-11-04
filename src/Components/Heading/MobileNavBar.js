import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navButton: {
    color: 'white',
    background: 'black',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&-selected': {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    color: 'pink',
  },
}));

const MobileNav = ({ routes }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.navButton}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        {isOpen ? (
          <ArrowDropUpIcon className={classes.icon} />
        ) : (
          <ArrowDropDownIcon className={classes.icon} />
        )}
        Menu
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {routes.map(({ route, name }) => {
          return (
            <MenuItem component={Link} to={route} onClick={handleClose}>
              {name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default MobileNav;
