import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ab2270',
    },
    secondary: {
      main: '#f44336',
    },
  },
  fontFamily: 'DoLight',
  viewHeightMax: '66vh',
});

export default theme;
