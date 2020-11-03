import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import content from './introcontent.md';
import P5Canvas from './P5Canvas/Canvas1';

const AntTabs = withStyles(() => ({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
}))(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: theme.palette.primary.main,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={3} pb={3} pl={1} pr={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [markdown, setMarkdown] = React.useState('**Hello world!!!**');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleMarkdown = async () => {
    const a = await fetch(content);
    const b = await a.text();
    setMarkdown(b);
  };

  React.useEffect(() => {
    handleMarkdown();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" elevation={0}>
        <AntTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="ant example"
        >
          <AntTab label="Visualizar" {...a11yProps(0)} />
          <AntTab label="Editar" {...a11yProps(1)} />
        </AntTabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x' : 'x-reverse'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MDEditor.Markdown source={markdown} />
          <Box pt={3} pb={3}>
            <P5Canvas />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MDEditor value={markdown} onChange={setMarkdown} preview="edit" />
          <Box pt={3} pb={3}>
            <P5Canvas />
          </Box>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
