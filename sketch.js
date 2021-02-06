
var movingRect,fixedRect
var ob1,ob2,ob3


function setup() {
  createCanvas(800, 600);

  movingRect = createSprite(100,100,50,50);
  movingRect.shapeColor="red";
  movingRect.debug=true

  fixedRect = createSprite(200,200,50,50)
  fixedRect.shapeColor="red";
  fixedRect.debug=true

  ob1 = createSprite(100,500,50,50)
  ob2 = createSprite(300,500,50,50)
  ob3 = createSprite(500,500,50,50)
  ob1.shapeColor="blue"
  ob2.shapeColor="blue"
  ob3.shapeColor="blue"

	
}


function draw() {
  background(0);


ob2.x=mouseX;
ob2.y=mouseY;
  

 if(collision(ob2,ob3)){
 ob2.shapeColor="orange"
     ob3.shapeColor="orange"
 }else{
ob2.shapeColor="red"
    ob3.shapeColor="red"

 }
  

 
  drawSprites();
 
}


