import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import Display from './components/labelDisplay/labelDisplay.js';

import './App.css';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant ="h2" align="center">
            Students Create and Show
          </Typography>
        </AppBar>

        <Grow in> 
        <Grid container alignItems="stretch">
        <Grid item sm={2}>
            <AppBar className={classes.appBar} position="static" color="inherit"></AppBar>
            <Display/>
          </Grid>
          <Grid item xs={4} sm={8}>
            <AppBar className={classes.appBar} position="static" color="inherit"></AppBar>
            <Student/>
          </Grid>
          <Grid item xs={2} sm={2}>
            <AppBar className={classes.appBar} position="static" color="inherit"></AppBar>
            <Create />
          </Grid>
        </Grid>
        </Grow>

      </Container>
    </div>
  );
}

export default App;
