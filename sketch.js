// variavel x e usado como contador
let x = 0;
// carregando as imagens , tanto do personagem como cenario
var img, goku;

// carregando as imagens com a função preload
function preload () {
  img = loadImage ("cena.jpg");
  goku = loadImage ("imagem.png");
}

function setup() {
  createCanvas(800, 500);
}

// carregando imagem como cenario
function draw() {
  background(img);
  
  // várias variáveis de cores para carregar os objetos geométricos, tanto internos como bordas
  let bretc1 = random(255);
  let bretc2 = random(255);
  let bretc3 = random(255);
  
  let retc1 = random(65);
  let retc2 = random(105);
  let retc3 = random(255);
 
  fill(retc1, retc2, retc3);
  stroke(bretc1, bretc2, bretc3);
  // definindo a espessura das bordas
  strokeWeight(3);
 
  // imagem do personagem 
  image(goku, -20, 120, 150, 150);
  
  // retângulo, usando var x para ser movimentar
  rect(150, 180, x, 35);
 
  // círculo
  ellipse(150, 200, 80, 80);
  
  x = x + 1;
  
  translate(150, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    // random interno para modificar as cores do círculo interno  
    let ecint1 = random(255);
    let ecint2 = random(0);
    let ecint3 = random(0);
    
    fill(ecint1, ecint2, ecint3);
    // usando var x para ser movimentar e usando rotate para multiplicar o círculo
    ellipse(x, 30, 40, 40);
    rotate(PI/5);
  }
  
  // usando if para zerar a var x quando a mesma chegar em 500 pixels
  if (x > 500) {
    x = 0;  
  }
}

