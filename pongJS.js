//BOLINHA
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//VEL BOLINHA
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//RAQUETE
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  verificarColisao();
  movimentarRaquete1();
  criarLinhaCentral();
  criarBolinha();
  criarRaquete1();
  movimentarBolinha();
  verificarBorda();
}

function criarRaquete1(){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}

function movimentarRaquete1(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function criarRaquete2(){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}

function criarBolinha(){
  //Criar Bolinha
  circle(xBolinha, yBolinha, diametro);  
}

function criarLinhaCentral(){
  line(width/2, 0, width/2, height);
  stroke('white');
  strokeWeight(5); 
}

function movimentarBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;  
}

function verificarBorda(){
  if (xBolinha > width-raio || xBolinha < 0+raio){
    velocidadexBolinha *= -1;
  }
  
  if(yBolinha > height-raio || yBolinha < 0+raio){
    velocidadeyBolinha *= -1;
  }  
}

function verificarColisao(){
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  }
}