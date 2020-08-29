var corona,mom,child,reach,doc1,mv,md;
var mom12,doctor,W1,W2,W3,W4,W5,W6,W7,W8,W9;
var W10,W11,W12,W13,W14,W15,W16,W17,W18,W19,W20,W21,W22;
var c1,c2,c3,c4,Cup;
function preload() {
  //ghost_running = loadAnimation("ghost1.png","ghost2.png","ghost3.png");
  corona=loadAnimation("Corona1.png");
   mom=loadAnimation("mom.png");
   child=loadAnimation("child.png");
   reach=loadAnimation("mom_child1.png");
   doc1=loadAnimation("doc1.png");
     //md=loadAnimation("mom_daughter.png");

  
}

function setup(){
  createCanvas(400,400);
  //mom = createSprite(200,180,20,50);
  
mom12= createSprite (10,10,20,20);
mom12.addAnimation("mother", mom); 

doctor=createSprite(380,100,10,10);
doctor.addAnimation("doctor", doc1); 
  
mv=createSprite(200,200,50,50);
mv.addAnimation("parents",reach);
mv.visible=false;
//Johnny.shapeColor="Blue";
 W1= createSprite (50,50,20,100);
W1.shapeColor="Green";
 W2 = createSprite(10, 150, 100, 20);
W2.shapeColor = "Green";
  
c1=createSprite(20, 180, 100, 20);
c1.addAnimation("Cor", corona);
  
W3 = createSprite (100,50,100,20);
W3.shapeColor = "Green";
  
c3=createSprite(130, 160, 100, 20);
c3.addAnimation("Cor", corona);
  
W4 = createSprite (100,200,100,20);
W4.shapeColor = "Green";
 W5 = createSprite  (100,150,20,80);
W5.shapeColor= "Green";
W6 = createSprite (200,100,20,100);
W6.shapeColor = "Green";
W7 = createSprite (300,100,100,20);
W7.shapeColor = "Green";
W8 = createSprite (250,200,20,100);
W8.shapeColor = "Green";
W9 = createSprite (350,200,100,20);
W9.shapeColor = "Green";

  
c2=createSprite(360, 230, 100, 20);
c2.addAnimation("Cor", corona);

W10 = createSprite (350,300,100,20);
W10.shapeColor = "Green";
W11 = createSprite (100,250,20,100);
W11.shapeColor = "Green";
 W12 = createSprite (300,50,20,100);
W12.shapeColor = "Green";

 c4=createSprite(150,380,20,100);
c4.addAnimation("Cor", corona);
  
W13 = createSprite (250,250,100,20);
W13.shapeColor = "Green";
W14 = createSprite (250,350,20,100);
W14.shapeColor = "Green";
 W15 = createSprite (150,350,100,20);
W15.shapeColor = "Green";
 W16 = createSprite (100,300,50,20);
W16.shapeColor = "Green";
 W17 = createSprite (200,50,50,20);
W17.shapeColor = "Green";
 W18 = createSprite (200,350,20,100);
W18.shapeColor = "Green";
 W19 = createSprite (50,350,20,100);
W19.shapeColor = "Green";
 W20 = createSprite (300,350,100,20);
W20.shapeColor = "Green";
 W21 = createSprite (50,250,100,20);
W21.shapeColor = "Green";
W22 = createSprite (350,50,100,20);
W22.shapeColor = "Green";
 Cup = createSprite (380,380,50,50);
//Cup.shapeColor = "Red";
Cup.addAnimation("daughter", child);

   edges=createEdgeSprites();
   c1.velocityY=1.5;
   c2.velocityY=1.5;
   c3.velocityY=-1.5;
   c4.velocityX=-1.5;
}

function draw(){
  background("black");
  mom12.velocityX=0;
  mom12.velocityY=0;
 
  text(mouseX+","+mouseY,mouseX,mouseY);
  c1.bounceOff(edges);
  c1.bounceOff(W1);
  c1.bounceOff(W2);
  c1.bounceOff(W19);
  c1.bounceOff(W21);
  
    c2.bounceOff(edges);
  c2.bounceOff(W7);
  c2.bounceOff(W9);
  c2.bounceOff(W10);
  c2.bounceOff(W20);
  c2.bounceOff(W22);
  
  
  c3.bounceOff(edges);
  c3.bounceOff(W3);
  c3.bounceOff(W4);
  c3.bounceOff(W5);
  c3.bounceOff(W11);
  c3.bounceOff(W15);
  c3.bounceOff(W16);
  
    c4.bounceOff(edges);
  c4.bounceOff(W10);
  c4.bounceOff(W15);
  c4.bounceOff(W14);
  c4.bounceOff(W18);
  c4.bounceOff(W19);
 
  
  mom12.bounceOff(edges);
  mom12.bounceOff(W1);
  mom12.bounceOff(W2);
  mom12.bounceOff(W3);
  mom12.bounceOff(W4);
  mom12.bounceOff(W5);
  mom12.bounceOff(W6);
  mom12.bounceOff(W7);
  mom12.bounceOff(W8);
  mom12.bounceOff(W9);
  mom12.bounceOff(W10);
  mom12.bounceOff(W11);
  mom12.bounceOff(W12);
  mom12.bounceOff(W13);
  mom12.bounceOff(W14);
  mom12.bounceOff(W15);
  mom12.bounceOff(W16);
  mom12.bounceOff(W17);
  mom12.bounceOff(W18);
  mom12.bounceOff(W19);
  mom12.bounceOff(W20);
  mom12.bounceOff(W21);
  mom12.bounceOff(W22);
  
  if(mom12.bounce(Cup))
  {
     mv.visible=true;
     c1.velocityY=0;
   c2.velocityY=0;
   c3.velocityY=0;
   c4.velocityX=0;
     text("Dear, I missed you so much", 200,100);
    
    
  }
  
  if(mom12.isTouching(c1)||mom12.isTouching(c2)||mom12.isTouching(c3)||mom12.isTouching(c4))
  {
     mom12.x=380;
     mom12.y=130;
     
     
  }
  /*if(keyIsDown(LEFT_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW))
        {
          mom12.x=10;
          mom12.y=10;
        }*/
  if(keyIsDown(LEFT_ARROW)){
      mom12.velocityX=-2;
  mom12.velocityY=0;
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      mom12.velocityX=2;
  mom12.velocityY=0;
    }
    if(keyIsDown(UP_ARROW)){
      mom12.velocityX=0;
  mom12.velocityY=-2;
    }
    
    if(keyIsDown(DOWN_ARROW)){
      mom12.velocityX=0;
  mom12.velocityY=2;
    }
    
  
  
  drawSprites();
  
}