var balloon,balloonI;
var Bground,BgroundImage
function preload(){
   balloonI=loadImage("Hot Air Balloon.png")
   BgroundImage=loadImage("backGround.png")
}

function setup() {
  createCanvas(1200,600);
  balloon = createSprite(60, 470, 50, 50);
  balloon.addImage(balloonI);
  balloon.scale=0.6;

  Bground = createSprite(600,300,20,20);
  //Bground.addImage(BgroundImage)
  Bground.scale=0.4
}

function draw() {
  background(BgroundImage);
  
  if (keyCode === 38){
    balloon.y=balloon.y-3 
    balloon.scale-0.1
  }

  if (keyCode === 40){
    balloon.y=balloon.y+3 

  }

  if (keyCode === 39){
    balloon.x=balloon.x+3 

  }

  if (keyCode === 37){
    balloon.x=balloon.x-3 

  }
  
  


  drawSprites();
}

getState()
{
  
  var gameStateRef  = database.ref('position');
  gameStateRef.on("name",(data)=>{
     gameState = data.val();
  })
 
}