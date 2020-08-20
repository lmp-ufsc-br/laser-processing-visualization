import React from 'react';
import VentilatorCard from '../../../components/CardHorizontal';

const data = [
  // {
  //   date: '29/04/2020',
  //   title: 'Usinagem de contrapeso metálico',
  //   description:
  //     'Para forçar o retorno da alavanca sem realizar outras furações nas peças em acrílico, um contrapeso com maior massa foi usinado a partir de tarugo metálico no Laboratório de Mecânica de Precisão. Com essa modificação, os rolamentos passaram a manter contato com o came durante rolagem em todo o seu perímetro',
  //   imgPath: '',
  // },

  {
    date: '18/08/2020',
    title: 'MICRESS',
    description: '',
    imgPath: '',
  },
  {
    date: '14/08/2020',
    title: 'LAMMPS - Simulador de Dinâmica molecular',
    description: '',
    imgPath: '',
  },
  {
    date: '13/08/2020',
    title: 'Busca por Softwares para simulação microestrutural',
    description:
      'Foram encontrados 4 softwares capazes de simular a evolução microestrutural durante a solidificação de ligas metálicas, são eles: LAMMPS (Open Source), MICRESS, DIGIMU e Thermo-Calc (proprietários)',
  },
  {
    date: '11/08/2020',
    title: 'Busca por referências iniciais',
    description:
      'Inicialmente foi realizada uma breve pesquisa sobre simulação microestrutural, resultando nos seguintes artigos: https://doi.org/10.4028/www.scientific.net/MSF.930.305, https://doi.org/10.1557/JMR.2001.0291, https://www.sciencedirect.com/science/article/abs/pii/S0749641907001490 e https://www.sciencedirect.com/science/article/abs/pii/S135964549900405X?via%3Dihub.',
  },
];

export default function History() {
  return data.map((data) => (
    <VentilatorCard
      date={data.date}
      title={data.title}
      description={data.description}
      imgPath={data.imgPath}
    />
  ));
}
