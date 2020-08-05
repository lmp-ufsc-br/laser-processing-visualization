import React from 'react';
import { Link } from 'react-router-dom';
import CSSBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core';

import { FooterWrapper } from './styles';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    color: 'black',
  },
  grow: {
    flexGrow: 1,
  },
  test: {},
}));

function Copyright() {
  const classes = useStyles();

  return (
    <Typography m={4} variant="body1" color="inherit" className={classes.grow}>
      {'Copyright © '}
      <Link href="https://material-ui.com/">MyTemplate</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (
    <FooterWrapper>
      <CSSBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar color="inherit" className={classes.test}>
          <Copyright />
        </Toolbar>
      </AppBar>
      <Copyright />
    </FooterWrapper>
  );
}
