##### 1. Introdução

Apesar de haver uma tendência crescente do mercado pelo uso de plataformas disponíveis na Web,
que tornam práticas, a comunicação, organização, e gerência de uma comunidade, sem
a necessidade do download de softwares robustos, o universo acadêmico ainda é carente de
 ferramentas que aliam praticidade, performance, e disponibilidade na Web.

Em áreas relacionadas a engenharia, é indispensável o uso de softwares de simulação
para auxiliar os cientistas nos cálculos e previsões de sistemas. Entretanto,
o uso desses programas é, muitas vezes, uma barreira para estudantes e cientistas,
pois requerem computadores potentes em termos de processamento, e que, em
grande parte das vezes, são de difícil acesso para os membros da comunidade.

Esse trabalho procura explorar a carência citada, e propõe uma solução para a área de manufatura utilizando a tecnologia Laser, através de um software disponível na Web, que simula e auxilia na visualização de processos relacionados à óptica geométrica, envolvendo a incidência de um raio Laser sobre uma superfície.

###### *Objetivo Geral*

O trabalho tem por objetivo criar um software de simulação e visualização de processos de manufatura envolvendo a tecnologia Laser.

##### 2. Materiais e métodos

O programa em questão foi escrito utilizando bibliotecas da linguagem JavaScript, como ReactJS, e p5.js, que ajudam na visualização do Laser incidindo sobre uma superfície e possibilitam que o usuário veja dados em tela, como: ângulo de incidência do raio, índice de refração, entre outros. Além disso foram utilizados cálculos envolvendo trigonometria, geometria, álgebra, que foram transcritos para o código de forma a respeitar os conceitos matemáticos envolvidos no processo.

###### *2.1 Primeira etapa*

No primeiro momento, foi-se necessário esboçar em tela uma fonte, e um raio sendo projetado dessa fonte.

<img alt="Esboço da fonte e do raio" title="Esboço da fonte e do raio" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5f53d77373cd6d8e3dc22437/891x230/0e7ee74065ab619ba102636f173e179f/image.png"/><br/>
Figura 1 - Esboço da fonte e projeção do raio laser

Para isso, criou-se dois vetores: um para esboçar a posição inicial do raio laser e outro para esboçar a posição final, que nesse caso estaria sendo modificado pela posição do mouse. A partir disso usou-se o conceito de subtração de vetores, exposto no esquema abaixo, para chegar ao vetor correspondente ao raio Laser.

<img alt="Cálculo de subtração de vetores" title="Cálculo de subtração de vetores" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5f53d77373cd6d8e3dc22437/947x390/b9126c602d056d34ba5adb79d7c318c3/image.png"/><br/>
Figura 2 - Esboço do esquema para cálculo de subtração de vetores

Nesse processo utilizou-se métodos do p5.Js como createVector e p5.Vector.sub para a realização das operações com vetores. Além disso, usou-se um condicional if para estipular que o raio Laser fosse disparado apenas quando houvesse um clique no mouse.



```js


  Sketch = (s) => {
    s.setup = () => {
      s.createCanvas(400, 400);
    };

    /** X coordinate of the laser source */
    const laserSourcePositionX = 0;

    /** Y coordinate of the laser source */
    const laserSourcePositionY = 0;

    /** Diameter of the laser source */
    const laserSourceDiameter = 15;

    /** The red scale begins in 0 (white) and end in 255(red) */
    const laserSourceRedFill = 255;

    s.draw = () => {
      /** Draw gray background with R, G and B with same value */
      s.background(200);

      /** Laser Source has no stroke (border line) */
      s.noStroke();

      /** Red fill color */
      s.fill(laserSourceRedFill, 0, 0);

      /** Create 15px diameter circle, with the center positioned in coordinates (0,0) */
      s.ellipse(
        laserSourcePositionX,
        laserSourcePositionY,
        laserSourceDiameter,
        laserSourceDiameter
      );

      /** The variable "laserRayStartPosition" refers to the position vector of the Laser beam begin */
      const laserRayStartPosition = s.createVector(0, 0);

      /** The variable "laserRayEndPosition" refers to the mouse position vector */
      const laserRayEndPosition = s.createVector(s.mouseX, s.mouseY);

      /**
       * The vector "laserVector" is the result of the subtraction between the mouse vector and the pos vector;
       * This relation is found from the concept of vector sum;
       * The method sub takes the vectors that will be subtracted as parameters;
       */
      const laserVector = P5.Vector.sub(
        laserRayEndPosition,
        laserRayStartPosition
      );

      /**
       * If mouse is pressed, a line, that represents the laser beam is shot from position (0,0)
       * until position where it was clicked
       */
      if (s.mouseIsPressed) {
        s.stroke(255, 0, 0);
        s.strokeWeight(2);
        s.line(0, 0, laserVector.x, laserVector.y);
      }
    };
  };


```
<br/>

###### *2.2 Segunda etapa*

O próximo passo do projeto foi adicionar funcionalidades relacionados à óptica geométrica, como, por exemplo, a reflexão de um feixe decorrente da mudança do meio pelo qual ele se propaga.

Para isso, foram adicionados ao código uma linha, na cor preta, para representar a superfície limitante que gerará a reflexão do raio, o próprio vetor que representa o raio refletido, que é esboçado por uma linha num tom de vermelho mais escuro, e foi compilado outro condicional que delimita os meios de propagação, ou seja, se o raio se propaga em uma região com y menor ou igual à superfície limitante, o raio só irá acompanhar o mouse, porém, se o raio extrapolar essa barreira, ele irá refletir.

<img alt="Reflexão em superfície plana" title="Reflexão em superfície plana" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5f53d77373cd6d8e3dc22437/897x224/f50ae7d595a30f34c95cdbd3ce4e2b98/image.png"/><br/>
Figura 3 - Reflexão do raio em uma superfície plana

Como o feixe acompanha a posição do mouse, foi necessário descobrir a posição em x, real, de onde o raio refletido partiria. Essa solução foi facilmente encontrada a partir de uma semelhança de triângulos esboçada na figura abaixo.

<img alt="Cálculo da reflexão" title="Cálculo da reflexão" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5f53d77373cd6d8e3dc22437/900x309/c4cf3802b8ea4dd3c44249f0b8da2090/image.png"/><br/>
Figura 4 - Cálculo da reflexão

Os métodos, do p5.Js, copy(), reflect() e translate() foram de suma importância para criar a reflexão de vetores. Na sequência, primeiro o vetor que será refletido é copiado, através do copy(), em seguida, essa cópia é espelhada em relação a uma normal previamente estabelecida no código, para que ao fim, ele seja transladado para a posição desejada.

<br/>

```js
  if (s.mouseIsPressed) {
  /** The incidence angle(radians) is equal to the arctan of mouseY position over the mouseX position */
  const incidenceAngleInRadians =
    s.PI / 2 - s.atan(laserRayDirection.y / laserRayDirection.x);
  /** To convert radians to degrees, just calculate a rule of three */
  const incidenceAngleInDegrees = (180 * incidenceAngleInRadians) / s.PI;

  const textProperties = {
    edgeThickness: 0,
    color: {
      greyscale: 50,
    },
    x: 10,
    y: 350,
    decimalPlaces: 2,
  };

  s.strokeWeight(textProperties.edgeThickness);
  s.fill(textProperties.color.greyscale);
  s.text(
    ` ngulo de incidência: ${incidenceAngleInDegrees.toFixed(
      textProperties.decimalPlaces
    )}`,
    textProperties.x,
    textProperties.y
  );
  /** if the mouseY <= bottomWallPosition, the reflected line appears */
  if (laserVector.y <= bottomWall.yPosition) {
    /** Draw laser ray */
    s.stroke(
      laserSource.color.r,
      laserSource.color.g,
      laserSource.color.b
    );
    s.strokeWeight(2);
    s.line(laserSource.x, laserSource.y, laserVector.x, laserVector.y);
  } else {
    /**
     * A new vector was created to be copied to generate the reflected vector
     * This new vector has the y position fixed
     */

    const reflectedRay = {
      xStartPosition: (s.mouseX * bottomWall.yPosition) / s.mouseY,
      thickness: 2,
      color: {
        r: 170,
        g: 0,
        b: 0,
      },
    };

    const reflectionStartBaseVector = s.createVector(
      laserSource.x,
      laserSource.y
    );
    const reflectionEndBaseVector = s.createVector(
      reflectedRay.xStartPosition,
      bottomWall.yPosition
    );
    const reflectionBaseVector = P5.Vector.sub(
      reflectionEndBaseVector,
      reflectionStartBaseVector
    );
    const guideBeam = {
      thickness: 2,
      color: {
        greyscale: 150,
      },
    };

    s.stroke(
      laserSource.color.r,
      laserSource.color.g,
      laserSource.color.b
    );
    s.strokeWeight(guideBeam.thickness);
    s.line(
      laserSource.x,
      laserSource.y,
      reflectedRay.xStartPosition,
      bottomWall.yPosition
    );

    s.stroke(guideBeam.color.greyscale);
    s.strokeWeight(guideBeam.thickness);
    s.line(
      reflectedRay.xStartPosition,
      bottomWall.yPosition,
      laserVector.x,
      laserVector.y
    );

    /**
     * The reflection depends of a normal vector;
     * It behaves like a mirror
     */
    const normalVector = s.createVector(0, 1);
    /**
     * Variable "reflectedLaserVector" receives laserVector copy, and using the reflect method;
     * the vector is reflected;
     */
    const reflectedLaserVector = reflectionBaseVector.copy();
    reflectedLaserVector.reflect(normalVector);

    /** Draw reflected ray */

    s.stroke(
      reflectedRay.color.r,
      reflectedRay.color.g,
      reflectedRay.color.b
    );
    s.strokeWeight(reflectedRay.thickness);
    s.translate(reflectionBaseVector.x, reflectionBaseVector.y);
    s.line(0, 0, reflectedLaserVector.x, reflectedLaserVector.y);
  }

```

<br/>

###### *2.3 Terceira etapa*

Após consolidar a visualização da reflexão do raio, bem como do ângulo de reflexão em relação à uma normal. Foi necessário converter para o programa a matemática e a física por trás da refração de um feixe, outro conceito muito importante da óptica geométrica.

Para descobrir o ângulo de refração do feixe, utilizou-se a lei de Snell-Descartes, a qual relaciona os ângulos de refração e reflexão com os índices de refração dos meios pelos quais a luz viaja.

<br/>

<img alt="Lei de Snell-Descartes" title="Lei de Snell-Descartes" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5f53d77373cd6d8e3dc22437/642x262/ffca6d5ca78fd515ea2082ce01003289/image.png"/><br/>
Figura 5 - Lei de Snell-Descartes

<br/>

Nesse trabalho, até o momento, considerou-se que o meio 1 por onde o raio viaja é o ar, portanto, o índice de refração n1 é aproximadamente 1,00. Já o índice de refração n2 é um valor adicionado ao código, e futuramente, esse valor será adicionado pelo próprio usuário em uma caixa de texto contida na interface.

<img alt="Cálculo do ângulo de refração" title="Cálculo do ângulo de refração" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5c7e19a8679c4b3e46bd66ee/5f53d77373cd6d8e3dc22437/c86f7342f6e96aaf5ad2287a5f75cddb/image.png"/><br/>
Figura 6 - Cálculo do ângulo de refração

<br/>

A coordenada em x, do raio refratado, foi obtida a partir do ângulo de refração.

<br/>

<img alt="Cálculo da posição final do raio em X" title="Cálculo da posição final do raio em X" style="width: 100%" src="https://trello-attachments.s3.amazonaws.com/5f53d77373cd6d8e3dc22437/599x262/b628a0518061a0b4e86c5c03471164bb/image.png"/><br/>
Figura 7 - Cálculo da posição final do raio em X

<br/>

O código abaixo representa os cálculos descritos anteriormente e convertidos para a linguagem JavaScript.

```js

const refractedRayProperties = {
  refractiveIndex: 1.33,
  thickness: 2,
  color: {
    r: 0,
    g: 0,
    b: 255,
  },
};

const refractiveAngleInRadians = s.asin(
  s.sin(incidenceAngleInRadians) /
    refractedRayProperties.refractiveIndex
);
const refractiveAngleInDegrees =
  (180 * refractiveAngleInRadians) / s.PI;
const xPosition =
  reflectedRay.xStartPosition +
  (s.height - bottomWall.yPosition) * s.tan(refractiveAngleInRadians);

s.strokeWeight(textProperties.edgeThickness);
s.fill(textProperties.color.greyscale);
s.text(
  ` ngulo de refração: ${refractiveAngleInDegrees.toFixed(
    textProperties.decimalPlaces
  )}`,
  textProperties.x,
  370
);

// Refractive Beam
s.stroke(
  refractedRayProperties.color.r,
  refractedRayProperties.color.g,
  refractedRayProperties.color.b
);
s.strokeWeight(refractedRayProperties.thickness);
s.line(
  reflectedRay.xStartPosition,
  bottomWall.yPosition,
  xPosition,
  s.height
);

s.strokeWeight(textProperties.edgeThickness);
s.fill(textProperties.color.greyscale);
s.text(
  `Índice de refração: ${refractedRayProperties.refractiveIndex.toFixed(
    textProperties.decimalPlaces
  )}`,
  textProperties.x,
  270
);

const reflectionStartBaseVector = s.createVector(
  laserSource.x,
  laserSource.y
);
const reflectionEndBaseVector = s.createVector(
  reflectedRay.xStartPosition,
  bottomWall.yPosition
);
const reflectionBaseVector = P5.Vector.sub(
  reflectionEndBaseVector,
  reflectionStartBaseVector
);


```





