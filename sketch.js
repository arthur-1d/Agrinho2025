function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["👨‍🌾", "⚒️", "🚜", "🔬"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;
let mensagensVitoria = [
  "Fazendeiro, ele é o dono da fazenda!", 
  "Ferramentas, elas são incríveis!", 
  "Máquinas, elas são as melhores do campo!", 
  "Pesquisas, elas melhoram tudo no campo!"
];

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
  instruções();
  
}

function instruções(){
  if(focused == false){
    textSize(15)
    fill("red")
    text("Clique, com o botão direito do mouse para iniciar.", 25,100)
    text("Use as teclas a,s,d e f para jogar.", 50,150)
    text("Os persoagens são o fazendeiro, a ferramenta,", 38, 195)
     text("as máqunas e as pesquisas.",50, 220)
  }
     
  
}

function ativaJogo() {
  if (focused == true) {
    background("green");
  } else {
    background("yellow");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("blue");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      textSize(20)
      fill("red")
      text(mensagensVitoria[i], 10, 200); 
      noLoop(); 
      break;
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(18);
    }
  }
}