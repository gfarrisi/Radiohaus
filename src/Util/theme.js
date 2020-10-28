import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF96D5',
    },
    secondary: {
      main: '#f44336',
    },
  },
  fontFamily: 'DoLight',
  viewHeightMax: '66vh',
  breakpoints: {
    values: {
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

export default theme;
