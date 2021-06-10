const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var gameState="start";
var ground,invisibleGround ;
var Jungle,Woodplank,Runner;
var player,block;
var playbutton;
var clothButton;
var running

function preload() {
 
bg1=loadImage("Background.png")
bg2=loadImage("Background2.png")
groundimg=loadImage("Ground.png")
buttonimg=loadImage("play.png")
Jungleimg=loadImage("Name.png")
Runnerimg=loadImage("Name2.png")
Woodimg=loadImage("Wood.png")

  }

  function setup(){
    var canvas  = createCanvas(900,500);
    engine = Engine.create();
    world = engine.world;

    
   // Making Infinite Ground
    ground=createSprite(900,500,5000,-50)
    ground.addImage("groundimg",groundimg)
    ground.visible=false;

    invisibleGround = createSprite(100,470,1000,20);
    invisibleGround.visible=false;
   
  // Making Front Page
    Woodplank=createSprite(440,190,100,70)
    Woodplank.addImage("play",Woodimg)
    Woodplank.scale=0.6;
    Woodplank.visible=true;

    Jungle=createSprite(440,100,40,70)
    Jungle.addImage("play",Jungleimg)
    Jungle.scale=0.5;
    Jungle.visible=true;
    
    Runner=createSprite(520,250,40,70)
    Runner.addImage("play",Runnerimg)
    Runner.visible=true;

    block=createSprite(700,400,40,70)
    block.visible=false;

    playbutton=createSprite(460,410,100,70)
    playbutton.scale=0.4;
    playbutton.addImage("play",buttonimg)
    playbutton.visible=true;

 // Player Code
    player=createSprite(550,400,40,40)
    player.visible=false;
   
  }


  function draw()
  {
    if (gameState==="start")
    {
      background(bg1);

     //When play Button is Pressed 
    if(mousePressedOver(playbutton))
    {
      player.velocityX=8
      player.velocityY=0;
    }
    
    //to switch on playing area
    if(player.isTouching(block))
    {
      gameState="play"
    }

    }else if(gameState==="play")
    
    {
      
       
      //Making all things needed to be visible on playing area
      Jungle.visible=false;
      Woodplank.visible=false;
      Runner.visible=false;
      playbutton.visible=false;
      ground.visible=true;
      player.visible=true;
     
      player.y=450
      player.x=150
      background(bg2);

      //to make ground infinite.
      ground.velocityX=-12
      if(ground.x<500)
      {  
        ground.x=1500
      }

      if (keyDown("space") && player.y >= 200  ) 
      {
      player.velocityY=-12
      player.velocityX=0;
      }
  
      player.velocityY = player.velocityY+0.9;
    
      player.collide(invisibleGround);
     
  }
       
   
  
    Engine.update(engine);
    drawSprites();
  }

   