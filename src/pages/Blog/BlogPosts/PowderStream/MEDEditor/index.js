import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import katex from 'katex';
import 'katex/dist/katex.css';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
  },
}));

const renderers = {
  inlineCode: ({ children }) => {
    if (/^\$\$(.*)\$\$/.test(children)) {
      const html = katex.renderToString(
        children.replace(/^\$\$(.*)\$\$/, '$1'),
        {
          throwOnError: false,
        }
      );
      return <code dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return children;
  },
  code: ({ children, language, value }) => {
    if (language.toLocaleLowerCase() === 'katex') {
      const html = katex.renderToString(value, {
        throwOnError: false,
      });
      return (
        <pre>
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
      );
    }
    return children;
  },
};

export default function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState('**Hello world!!!**');
  return (
    <div className={classes.container}>
      <MDEditor
        value={value}
        onChange={setValue}
        preview="edit"
        previewOptions={{ renderers }}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
