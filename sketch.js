var fixedRect , movingRect



function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 70, 70);
  movingRect = createSprite( 500,250,70,40);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2) {
      
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
    
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }



  drawSprites();
}





/*

xpositions 
fixed = 200
moving = 300

xd = moving - fixed = 100

widths
fw = 100;
mw = 400;

1/2 (fw) = 50
1/2 (mw) = 200

tw = 1/2 (fw+mw) = 250 === mim required distance to touch each other - predefined

xd <= predefined- touching

xd > predefined- not touching
*/

