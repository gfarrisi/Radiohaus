import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Util/theme';
import { Home } from './Routes';
import Header from './Components/Heading/Header'

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
      
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
