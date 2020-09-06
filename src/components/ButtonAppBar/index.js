import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
/** import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; */
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: '#fafafa',
    color: '#000',
  },

  title: {
    flexGrow: 1,
    paddign: 0,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar
      id="appbar"
      position="static"
      className={classes.root}
      disableGutters
    >
      <Container maxwidth="lg">
        <Toolbar id="Toolbar" disableGutters>
          <Typography id="text" variant="h6" className={classes.title}>
            LMP
          </Typography>
          <Button color="black">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
