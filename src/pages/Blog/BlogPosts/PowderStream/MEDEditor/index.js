import React from 'react';
import MDEditor from '@uiw/react-md-editor';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
  },
}));

export default function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState('**Hello world!!!**');
  return (
    <div className={classes.container}>
      <MDEditor value={value} onChange={setValue} />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
