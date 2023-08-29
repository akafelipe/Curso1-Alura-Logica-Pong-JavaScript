//BOLINHA
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//RAQUETE**
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//RAQUETE1
let xRaquete1 = 5;
let yRaquete1 = 150;

//RAQUETE2
let xRaquete2 = 585;
let yRaquete2 = 150;

//PLACAR DO JOGO
let meusPontos = 0;
let pontosOp = 0;

//UTILIZA BIBLIOTECA P5 COLLIDE
let colisao = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  movimentarBolinha();
  criarBolinha();   
  criarRaquete(xRaquete1, yRaquete1);
  criarRaquete(xRaquete2, yRaquete2);  
  movimentarRaquete1();
  movimentarRaquete2();
  verificarBorda();
  colisaoRaquete(xRaquete1, yRaquete1);
  colisaoRaquete(xRaquete2, yRaquete2);
  incluirPlacar();
  marcarPonto();
  bolinhaNaoFicaPresa();
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}

function criarRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentarRaquete1(){
  if (keyIsDown(UP_ARROW)){
    yRaquete1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete1 += 10;
  }
}

function movimentarRaquete2(){
  if (keyIsDown(87)){
    yRaquete2 -= 10;
  }
  if (keyIsDown(83)){
    yRaquete2 += 10;
  }
}

function criarBolinha(){
  //Criar Bolinha
  circle(xBolinha, yBolinha, diametro);  
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

function colisaoRaquete(x, y){
  colisao = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio); 
  if(colisao){
    velocidadexBolinha *= -1;
  }
}

function incluirPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(0, 255, 255));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 0, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOp, 470, 26);
}

function marcarPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha <10){
    pontosOp += 1;
  }
}
