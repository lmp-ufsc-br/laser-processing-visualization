##### Introdução

###### *Objetivo Geral*

O experimento virtual teve como objetivo geral desenvolver o conhecimento necessário para a realização
de simples simulações de deformação por meio de um software de análises de elementos finitos.

###### *Objetivo Específico*

Calcular o módulo de elasticidade equivalente do corpo de prova;

Comparar o resultado obtido com as propriedades mecânicas das matérias primas que
formam o material compósito;

##### Materiais e métodos

O ambiente escolhido para modelar o corpo de prova foi o software CAD Onshape. Para
executar a simulação, o software selecionado foi o Ansys Mechanical da empresa
norte-americana Ansys Inc.

No início do projeto, foram definidas as restrições e requisitos que
o teste precisaria atender, conforme descrito nos tópicos a seguir.

###### *Geometria*

O corpo de prova deve possuir as seguintes dimensões:  X = 2mm;  Y = 1mm;  Z = 2mm;

O corpo deverá ser composto por 15 corpos menores, representando grãos;

Os grãos devem possuir seções transversais poligonais;

Evitar que os grãos possuam ângulos retos;

###### *Material*

Cada grão deve ser constituído por uma matéria prima diferentes, sendo essas
selecionadas na biblioteca padrão do Ansys Mechanical;

As propriedades de cada matéria prima selecionada deverão ser listadas em formato
de tabela;



###### *Condições de contorno*

Utilizar a malha fina (padrão do Ansys);

A superfície inferior do corpo de prova deve ser fixada;

A uma das faces do corpo de prova, deve ser aplicada uma força de 500N
em direção ao sentido positivo do eixo Z, submetendo o corpo de prova a uma
tensão de tração.

###### *Modelagem*

Inicialmente foi necessário modelar o corpo de prova, para isso foi utilizado o software CAD OnShape. Distribuímos dentro das dimensões solicitadas (2mm x 1mm x 2mm) 15 grãos, sendo estes não uniformes e poligonais com ângulos não retos, como pode-se visualizar na Figura 1.

<img alt="Modelo CAD" title="Modelo CAD" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5c7e19a8679c4b3e46bd66ee/5f314f8553e2fe83be5a5618/20b86bc7957e870e7d2a2a4d9159c684/isometric_specimen.png"/><br/>
Figura 1 - Vista isométrica corpo de prova

###### *Simulação*

Tendo o corpo de prova já modelado, seguimos para o Ansys. Dentro do ambiente
de simulação, utilizamos o recurso de sistema de análise estático estrutural.
Definimos os itens necessários para o cálculo da simulação, tais itens como
matérias primas, geometria da peça, modelo de malha e esforços atuantes.

Para simular um corpo heterogêneo, selecionamos 6 matérias primas, todas da
biblioteca padrão, estas foram selecionadas por possuírem propriedades como
Tensile Yield Strength e Tensile Ultimate Strength similares. Elas são:

Magnesium Alloy;

Structural Steel;

Stainless Steel;

Gray Cast Iron;

Copper Alloy;

Aluminum Alloy.


Podemos visualizar na Figura 2 como estas propriedades de cada material são exibidas no Ansys.

<img alt="Propriedades do Magnésio" title="Propriedades do Magnésio" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5f314f8553e2fe83be5a5618/642x339/b3e9d36274b8da3404fb414c31d80bc6/magnesium_alloy_properties.png"/><br/>

Figura 2 - Propriedades da Liga de Magnésio

As propriedades dos outros materiais selecionados estão descritas na Tabela 1.

Tabela 1 - Propriedades mecânicas

| Property | Structural Steel | Aluminum Alloy | Gray Cast Iron | Copper Alloy | Stainless Steel | Unidades |
|--|--|--|--|--|--|--|
| Young Modulus (E) | 200 | 71 | 110 | 110 | 193 | GPa
| Tensile Yield Stregth (Sy) | 250 | 280 | - | 280 | 207 | MPa
| Tensile Ultimate Strength (Su) | 460 | 310 | 240 | 430 | 586 | MPa

<br/>

A próxima etapa foi de importar a geometria modelada para o projeto do Ansys e definir as propriedades dos 15 corpos menores, para isso definimos de maneira aleatória utilizando as 6 matérias primas. Com estas propriedades já configuradas, determinamos para a realização dos cálculos a malha padrão do Ansys como podemos visualizar na Figura 3.

<img alt="Propriedades do Magnésio" title="Propriedades do Magnésio" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5c7e19a8679c4b3e46bd66ee/5f314f8553e2fe83be5a5618/1d10a0ef4c47920a0d3f6ecb0af0fb68/mesh_ansys.png"/><br/>


Figura 3 - Malha padrão Ansys

Por fim, os últimos parâmetros que precisamos inserir são as forças envolvidas
na simulação. Para isso, fixamos a superfície inferior do corpo de prova e
adicionamos na superfície superior uma força de 500N no sentido positivo do eixo
Z, demonstrado na Figura 4.

<img alt="Forças aplicadas" title="Forças aplicadas" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5c7e19a8679c4b3e46bd66ee/5f314f8553e2fe83be5a5618/c305b163a0373395ebd9f6d2bbc7826f/forces.png"/>
Figura 4 - Forças aplicadas

Com todos os parâmetros definidos, selecionamos quais as simulações que serão calculadas. Para obtermos o resultado que desejamos, executaremos apenas a simulação de deformação direcional no sentido positivo do eixo Z.

##### Resultados e discussões

Concluída a simulação, os resultados obtidos através dela foram de uma deformação máxima de 0,0064922mm e mínima de 0,0043941mm. O valor médio de deformação foi de 0,0053934mm. Abaixo visualizamos uma animação da simulação.

COLOCAR GIF DA DEFORMAÇÃO

Com o resultado da simulação nos informando o valor da deformação média, é possível calcular o módulo de elasticidade equivalente do corpo de prova, por meio das fórmulas:


<!--
$$
\sigma=E\cdot\varepsilon
$$
$$
E=\frac{\sigma}{\varepsilon}=\frac{F\cdot l o}{Ao\cdot\mathrm{\Delta l}}
$$
-->

[EQUAÇÃO AQUI]

Onde F é força, lo é a altura inicial do corpo de prova, Ao a área inicial da superfície a qual está sendo aplicada a força e l  a  variação da altura do corpo de prova.

Aplicando a fórmula, temos:


[EQUAÇÃO AQUI]

<!--
$$
Eeq=(500\ N\cdot2\ mm)/(2\ mm²⋅0,0053934 mm)=92705,90  N/mm²=92,706 GPa
$$
-->

Observando individualmente os valores dos módulos de elasticidade dos materiais utilizados para a simulação, o resultado obtido através do teste é razoável.

