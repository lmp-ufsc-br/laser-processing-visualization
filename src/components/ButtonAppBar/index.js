import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
/** import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; */
import { Container } from './styles';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Container>
      <AppBar id="appbar" position="static">
        <Toolbar id="Toolbar">
          <Typography id="text" variant="h6" className={classes.title}>
            Laser Simulation
          </Typography>
          <Button color="black">Login</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
