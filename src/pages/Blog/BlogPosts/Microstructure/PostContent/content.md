##### Introdução

###### *Objetivo Geral*

Dentre as características que influenciam nas propriedades mecânicas de uma peça metálica, destaca-se a  microestrutura resultante ao final do processo de fabricação. A fim de auxiliar na escolha dos parâmetros a serem utilizados nesses processos, este trabalho se dedica a encontrar meios para simular a composição morfológica final da microestrutura do material processado, tendo como objetivo a implementação de uma ferramenta web capaz de realizar de forma prática e acessível tal simulação.

<img alt="Worley Noise" title="Worley Noise" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5c7e19a8679c4b3e46bd66ee/5f58254dfc4a193807fa3cf5/4d9164122587cf70d75a3f805c01666f/mi.gif"/><br/><br/>


##### Revisão Bibliográfica

Com a finalidade de compreender o estado da arte no que tange a simulação microestrutural, em especial com relação aos processos de manufatura aditiva a laser, foi realizada uma breve revisão bibliográfica sobre o tema. Como resultado obteve-se os seguintes artigos:

[3D simulations of microstructure and comparison with experimental microstructure coming from O.I.M analysis](https://doi.org/10.1016/j.ijplas.2007.10.004)

[Three-dimensional microstructural evolution in ideal grain growth—general statistics](https://doi.org/10.1016/S1359-6454(99)00405-X)

[Evolution of Individual Grains in 3d Microstructure Generated by Computational Simulation of Transformations Involving Two Phases](https://doi.org/10.4028/www.scientific.net/MSF.930.305)

Em seguida, foi empenhada uma busca pelos principais softwares capazes de realizar simulação microestrutural, foram encontrados os seguintes:

No início do projeto, foram definidas as restrições e requisitos que
o teste precisaria atender, conforme descrito nos tópicos a seguir.

###### *Micres*

Software proprietário baseado nos modelos de composição de fase do Thermo-Calc em conjunto com modelos de modelagem cinemática. Possui boa usabilidade em relação aos demais softwares testados e satisfatório suporte da comunidade de usuários.

###### *LAMMPS*

Ferramenta poderosa de simulação de dinâmica molecular open source. Apresenta dificuldades na utilização por não possuir interface de usuário, necessitando o desenvolvimento de um código específico para cada simulação.

###### *Digimu*
###### *Thermo-Calc*



##### Materiais e Métodos

Para realizar a implementação de uma tela para a visualização dos grãos de uma microestrutura foram utilizados os recursos de ferramentas web baseadas em JavaScript como o React.js e o P5.js, além de conceitos da função de ruído Worley Noise.


###### *Primeira etapa*

A função de ruído Worlei Noise produz uma textura procedural que se assemelha ao
que é observado em diversas morfologias microestruturais em metais.


<img alt="Worley Noise" title="Worley Noise" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5c7e19a8679c4b3e46bd66ee/5f58254dfc4a193807fa3cf5/8437307eac5b61312ae7407a1a7270b8/image.png"/><br/>



<center> Figura 1 - Worley Noise </center>
<br/>

A função é caracterizada por um vetor V[n] de pontos distribuídos num espaço bi ou tridimensional e, de acordo com a distância calculada entre cada ponto da tela até o enésimo ponto de V mais próximo, define-se a coloração e intensidade de cor do ponto.

Partindo do código original de ruído Worlei desenvolvida por <github do canal>, foram feitas alterações para que cada ponto gerado pelo código correspondesse a um “núcleo” de fase sólida distantes do plano xy(correspondente à tela) em z. Ao longo da execução do programa os pontos decrescem seu valor em z, aproximando-os do plano xy e assim reproduzindo o efeito de crescimento de grão.

