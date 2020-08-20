import React from 'react';
import VentilatorCard from '../../../components/CardHorizontal';

const data = [
  {
    date: '29/04/2020',
    title: 'Usinagem de contrapeso metálico',
    description:
      'Para forçar o retorno da alavanca sem realizar outras furações nas peças em acrílico, um contrapeso com maior massa foi usinado a partir de tarugo metálico no Laboratório de Mecânica de Precisão. Com essa modificação, os rolamentos passaram a manter contato com o came durante rolagem em todo o seu perímetro',
    imgPath: '',
  },
  {
    date: '17/04/2020',
    title: 'Colagem das placas de acrílico',
    description:
      'As placas de acrílico foram unidas usando clorofórmio com a ajuda de recursos do Laboratório de Mecânica de Precisão e do Laboratório de Design e Usabilidade da UFSC.Após a colagem a estrutura se manteve rígida e pronta para realização de ensaios.',
    imgPath: '',
  },
  {
    date: '15/04/2020',
    title: 'Montagem do primeiro protótipo em acrílico (OxyGEN M V5)',
    description:
      'Os componentes são levados para montagem com apoio das instalações do Laboratório de Mecânica de Precisão (LMP) da UFSC. A montagem deixa claro que será necessário fixar as partes com resina ou outro tipo de fixação antes da realização de qualquer ensaio.',
  },
  {
    date: '13/04/2020',
    title: 'Corte a laser das chapas de acrílico',
    description:
      'As chapas de acrílico do protótipo experimental OxyGEN M V5, adaptado pela equipe hipeerLab, são fabricadas por corte a laser no Núcleo de Gestão e Design - Laboratório de Design e Usabilidade da UFSC.',
  },
  {
    date: '12/04/2020',
    title: 'Adaptação do projeto Oxygen para transmissão direta',
    description:
      'Eliminação da transmissão por engrenagens e adaptação de flange formada por anéis de acrílico. A opção reduz a complexidade de montagem do protótipo e se assemelha ao conceito IP.',
  },
  {
    date: '07/04/2020',
    title: 'Adoção do projeto OxyGEN',
    description:
      'Após avaliar e comparar outros projetos de grupos do Brasil e do mundo, optamos por adotar o projeto OxyGEN, da equipe Protofy, de Barcelona na Espanha. O projeto é um dos mais bem documentados dentre os projetos abertos (open-source) e faz uso de poucos componentes eletrônicos, assim como de sistema de acionamento com componentes altamente disponíveis no mercado brasileiro.',
  },
  {
    date: '28/03/2020',
    title: 'Modelagem de conceito com came e cinto',
    description:
      'Desenvolvimento de modelo de automatizador de ambu baseado em rotação contínua de um came que traciona cinto através de sistema de rolos móveis.',
  },
  {
    date: '23/03/2020',
    title: 'Esboço do primeiro conceito',
    description:
      'Desenvolvimento de modelo utilizando dreno de sucção como alternativa em situação de escassez de ambu bag.',
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
