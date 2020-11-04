import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Util/theme';
import { Home, Events } from './Routes';
import Header from './Components/Heading/Header';
import Footer from './Components/Footer/footer';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/events' component={Events} />
        </Switch>
        <Footer />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
