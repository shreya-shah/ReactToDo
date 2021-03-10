import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, MuiThemeProvider, Toolbar, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/DoneOutline";
import theme from "./theme";
import Dashboard from "./Dashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
 
function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <CheckIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              ToDo
            </Typography>
          </Toolbar>
        </AppBar>
        <Dashboard/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
