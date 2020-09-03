import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TitleCard from './TitleCard';
import ArticleCard from './ArticleCard';
import Sidebar from './Sidebar';
import Laser from './laser-matter';
import Solidification from './solidification';
import Resistance from './resistance';
import BlogContent from '../../components/BlogContent';
import LaserImg from '../../img/laser.png';
import Micros from '../../img/Micros.png';
import Deform from '../../img/Deformation.png';
import LMD from '../../img/Direct.jfif';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const TitleContent = {
  title: 'Simulação de Processamento a Laser',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: LMD,
  imgText: 'main image description',
};

const ArticleContent = [
  {
    title: 'Simulação Laser-Matéria',
    date: 'Aug 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: LaserImg,
    imageText: 'Image Text',
  },
  {
    title: 'Simulação Microestrutural',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: Micros,
    imageText: 'Image Text',
  },
  {
    title: 'Resistência Mecânica',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: Deform,
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <TitleCard post={TitleContent} />
          <Grid container spacing={4}>
            {ArticleContent.map((post) => (
              <ArticleCard key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <BlogContent title="Artigos">
              <Laser />
              <Solidification />
              <Resistance />
            </BlogContent>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </>
  );
}
