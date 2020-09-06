import React from 'react';
import Markdown from 'markdown-to-jsx';
import laserImg from './img/surface.jpg';
import microstructureImg from './img/microstructural.jpg';
import feaImg from './img/fea.png';

const content = `
<!-- Escreva seu artigo abaixo, usando markdown e HTML -->


##### Introdução

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sagittis
massa, nec venenatis quam elementum et. Mauris finibus justo vitae ligula varius
laoreet. Pellentesque facilisis nulla magna. Curabitur vel ultricies nisl. Suspendisse
felis massa, cursus fermentum bibendum et, egestas sit amet velit. Phasellus porta tincidunt
dui, ac fermentum metus blandit vel. Donec at leo egestas, pellentesque magna vel,
malesuada augue. Morbi vehicula auctor ligula, sit amet placerat nulla mollis ut.
 Maecenas cursus pharetra ligula, ut sagittis mauris.

<img alt="Irregular Surface" title="Irregular Surface" style="width: 100%" src={${laserImg}}/><br/><br/>


Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

##### Objetivo

Pellentesque facilisis nulla magna. Curabitur vel ultricies nisl. Suspendisse
felis massa, cursus fermentum bibendum et, egestas sit amet velit.

##### Materiais e métodos

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sagittis
massa, nec venenatis quam elementum et. Mauris finibus justo vitae ligula varius
laoreet. Pellentesque facilisis nulla magna. Curabitur vel ultricies nisl. Suspendisse
felis massa, cursus fermentum bibendum et, egestas sit amet velit. Phasellus porta tincidunt
dui, ac fermentum metus blandit vel. Donec at leo egestas, pellentesque magna vel,
malesuada augue.

<img alt="Irregular surface" title="Microstructure" style="width: 100%" src={${microstructureImg}}/><br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sagittis
massa, nec venenatis quam elementum et. Mauris finibus justo vitae ligula varius
laoreet. Pellentesque facilisis nulla magna. Curabitur vel ultricies nisl. Suspendisse
felis massa, cursus fermentum bibendum et, egestas sit amet velit. Phasellus porta tincidunt
dui, ac fermentum metus blandit vel. Donec at leo egestas, pellentesque magna vel,
malesuada augue.


##### Resultados e discussões

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sagittis
massa, nec venenatis quam elementum et. Mauris finibus justo vitae ligula varius
laoreet. Pellentesque facilisis nulla magna. Curabitur vel ultricies nisl. Suspendisse
felis massa, cursus fermentum bibendum et, egestas sit amet velit. Phasellus porta tincidunt
dui, ac fermentum metus blandit vel. Donec at leo egestas, pellentesque magna vel,
malesuada augue.


<pre>
  <code>

    function myFunction(){
      let x = 2;
      x+=2;
      return(x);
    }

  </code>
</pre>
<br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sagittis
massa, nec venenatis quam elementum et. Mauris finibus justo vitae ligula varius
laoreet. Pellentesque facilisis nulla magna. Curabitur vel ultricies nisl. Suspendisse
felis massa, cursus fermentum bibendum et, egestas sit amet velit. Phasellus porta tincidunt
dui, ac fermentum metus blandit vel. Donec at leo egestas, pellentesque magna vel,
malesuada augue.

<img alt="FEA Simulation" alt="FEA Simulation" style="width: 100%" src={${feaImg}}/><br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sagittis
massa, nec venenatis quam elementum et. Mauris finibus justo vitae ligula varius
laoreet. Pellentesque facilisis nulla magna. Curabitur vel ultricies nisl. Suspendisse
felis massa, cursus fermentum bibendum et, egestas sit amet velit. Phasellus porta tincidunt
dui, ac fermentum metus blandit vel. Donec at leo egestas, pellentesque magna vel,
malesuada augue.


##### Conclusões

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sagittis
massa, nec venenatis quam elementum et. Mauris finibus justo vitae ligula varius
laoreet. Pellentesque facilisis nulla magna. Curabitur vel ultricies nisl. Suspendisse
felis massa, cursus fermentum bibendum et, egestas sit amet velit. Phasellus porta tincidunt
dui, ac fermentum metus blandit vel. Donec at leo egestas, pellentesque magna vel,
malesuada augue.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sagittis
massa, nec venenatis quam elementum et. Mauris finibus justo vitae ligula varius
laoreet. Pellentesque facilisis nulla magna. Curabitur vel ultricies nisl. Suspendisse
felis massa, cursus fermentum bibendum et, egestas sit amet velit. Phasellus porta tincidunt
dui, ac fermentum metus blandit vel. Donec at leo egestas, pellentesque magna vel,
malesuada augue.

##### Referências

[[1] Pulsed laser ablation simulator](http://www.fp7-diplat.eu/project-results/pulsed-laser-ablation-simulator/)
<br/>
[[2] What Is Finite Element Analysis and How Does It Work?](https://interestingengineering.com/what-is-finite-element-analysis-and-how-does-it-work)
<br/>
[[3] Microstructural analysis](https://www.lucideon.com/testing-characterization/microstructural-analysis)

`;

function Article() {
  return (
    <div className="article">
      <Markdown>{content}</Markdown>
    </div>
  );
}

export default Article;
