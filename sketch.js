//variáveis da bolinha 
let xbolinha=100
let ybolinha=100
let diametro= 30
let raio = diametro/2

//variáveis da velocidade
let xvelocidade=6
let yvelocidade=6

//variáveis da raquete
let xraquete=5
let yraquete=140
let lraquete=15
let hraquete= 100
let xraqueteop=460
let yraqueteop=140
let velocidadeyop;
let colidiu= false 

//variaveis do placar
let meuspontos=0
let pontosop=0

function setup() {
  createCanvas(500,325);
}

function draw() {
  background(0);
  criabolinha();
  movimentobolinha();
  colisaoborda();
  minharaquete();
  movimentaraquete();
  colisaoraquete ();
  criaraqueteop();
  movimentoraqueteop();
  colisaobolinharaquete();
  criaplacar();
  marcaponto();
  
}

function criabolinha(){  circle(xbolinha,ybolinha,diametro)}
function movimentobolinha(){ xbolinha += xvelocidade
  ybolinha += yvelocidade}
function colisaoborda(){ if (xbolinha + raio > width || xbolinha -raio < 0)
  xvelocidade *= -1
  if (xbolinha > height || ybolinha < 0)
  yvelocidade *= -1 
  }
function minharaquete(){rect(xraquete,yraquete,lraquete,hraquete)}
function movimentaraquete(){  if (keyIsDown(UP_ARROW))
    yraquete -= 10
   if (keyIsDown(DOWN_ARROW))
    yraquete += 10}
    function colisaoraquete(){
if(xbolinha - raio < xraquete + lraquete
  &&ybolinha - raio < yraquete + hraquete
  &&ybolinha + raio > yraquete )
xraquete*= -1}
   function criaraqueteop(){
 rect(xraqueteop,yraqueteop,lraquete,hraquete)    
   }
function movimentoraqueteop(){
 velocidadeyop=ybolinha - yraqueteop - lraquete/2 - 200
  yraqueteop += velocidadeyop
}
function colisaobolinharaquete(){
  colidiu = collideRectCircle( xraqueteop, yraqueteop, lraquete, hraquete, xbolinha, ybolinha, diametro)
  if(colidiu)
    xvelocidade *= -1
}
function criaplacar(){
  stroke(color(0, 30, 20000))
  fill(color(39, 240, 12))
  rect(85, 3, 30, 40)
  rect(285,3,30,40)
  textAlign(CENTER)
  textSize (30)
  fill(255)
  text(meuspontos, 100, 27)
  text(pontosop, 300, 27)
}

function marcaponto(){
  if (xbolinha< 15)
     pontosop += 1
  if (xbolinha > 485)
    meuspontos += 1
}
