var bg, bgImg
var gato, gatoImg1, gatoImg2, gatoImg3
var rato, ratoImg1, ratoImg2, ratoImg3

function preload() {
    //carregue as imagens aqui
  bg = loadImage("garden.png")
  gatoImg1 = loadAnimation ("cat1.png")
  gatoImg2 = loadAnimation ("cat2.png","cat3.png")
  gatoImg3 = loadAnimation ("cat4.png")
  ratoImg1 = loadAnimation ("mouse1.png")
  ratoImg2 = loadAnimation ("mouse2.png", "mouse3.png")
  ratoImg3 = loadAnimation ("mouse4.png")
  


}


function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
  gato = createSprite (850,600)
  gato.addAnimation ("gatoparado", gatoImg1)
  
  gato.scale = 0.2
  
  rato = createSprite (200,600)
  rato.addAnimation ("ratoparado", ratoImg1)
  
  rato.scale = 0.2
  
  
  
}

function draw() {

    background(bg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

  if(gato.x - rato.x < (gato.width - rato.width)/2){
    gato.velocityX = 0
    gato.addAnimation("ultimaimagemgato", gatoImg3)
    gato.changeAnimation("ultimaimagemgato")
    gato.x = 300
    gato.scale = 0.2
    
    
    rato.velocityX = 0
    rato.addAnimation("ultimaimagemrato", ratoImg3)
    rato.changeAnimation("ultimaimagemrato")
    rato.scale = 0.2
    
    
    
  }
  
  
  
  
  
  drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if (keyCode === LEFT_ARROW) {
    gato.velocityX = -5;
    gato.addAnimation("gatoAnimacao2", gatoImg2);
    gato.changeAnimation("gatoAnimacao2");

    rato.addAnimation("ratoAnimacao2", ratoImg2);
    rato.frameDelay = 25;
    rato.changeAnimation("ratoAnimacao2");
  }
    
  
  
  

}
