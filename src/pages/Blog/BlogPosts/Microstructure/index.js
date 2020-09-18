import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkdedInIcon from '@material-ui/icons/LinkedIn';
import TitleCard from './TitleCard';
import Sidebar from './Sidebar';

import PostContent from './PostContent';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const TitleContent = {
  title: 'Visualização de grãos',
  description:
    'Estudo de alternativas para utilização de ferramenta iterativa de visualização do crescimento de grãos',
  image:
    'https://trello-attachments.s3.amazonaws.com/5c7e19a8679c4b3e46bd66ee/5f58254dfc4a193807fa3cf5/8437307eac5b61312ae7407a1a7270b8/image.png',
  imgText: 'main image description',
};

const sidebar = {
  title: 'Autores',
  description: `Bruno Weber de Castro é estudante de graduação em Engenharia Mecânica, atua
  no Laboratório de Mecânica de Precisão desde 2019.
   Atualmente estuda processos de fabricação a Laser juntamente com o co-autor Calil Amaral, pós-graduando em
   Engenharia Mecânica no mesmo laboratório.`,
  archives: [
    { title: 'Março 2020', url: '#' },
    { title: 'Fevereiro 2020', url: '#' },
    { title: 'Janeiro 2020', url: '#' },
    { title: 'Dezembro 2020', url: '#' },
    { title: 'Novembro 2019', url: '#' },
    { title: 'Outubro 2019', url: '#' },
    { title: 'Setembro 2019', url: '#' },
    { title: 'Agosto 2019', url: '#' },
    { title: 'Julho 2019', url: '#' },
    { title: 'Junho 2019', url: '#' },
    { title: 'Maio 2019', url: '#' },
    { title: 'Abril 2019', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/lmp-ufsc-br' },
    {
      name: 'LinkedIn',
      icon: LinkdedInIcon,
      url: 'https://www.linkedin.com/company/precision-mechanics-laboratory',
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: 'https://www.instagram.com/lmp.ufsc/',
    },
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
          <Grid container spacing={5} className={classes.mainGrid}>
            <PostContent title="" />
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
