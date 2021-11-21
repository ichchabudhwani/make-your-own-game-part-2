var backG;
var motu;
var samosa;
var bg;
function preload (){
  bg=loadImage("https://image.shutterstock.com/image-vector/straight-empty-road-through-countryside-260nw-1523000288.jpg")
  motuImg=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlW1C9PqwhaSLr7qZKS1tPYJsnMI0xaAvcUA&usqp=CAU")
  samosaImg=loadImage("https://image.shutterstock.com/image-vector/samosa-vector-green-coriander-leaves-260nw-1145092400.jpg")

}


function setup() {
  createCanvas(400,400);
  backG = createSprite(200,200,10,10)
backG.addImage(bg)
backG.scale= 1.9
backG.velocityX=+1
backG.x=backG.height/2;
 motu = createSprite(200, 300, 10, 10);
 motu.addImage(motuImg)
 motu.scale=0.5


 
 samosa=createSprite(300,300,10,10)
samosa.addImage(samosaImg)
samosa.scale=0.2


}


function draw() {
  background("white");
 
  if (keyWentDown("space")) {
   
 
    motu.velocityX =10
  // edges=createEdgeSprites();
  // motu.collide(edges[3])
 
    }
    if (keyWentUp("space")) {
   
 
      motu.velocityX =0
    
      }
 
   if(backG.x < 0){
 backG.x=backG.height/2
 
   }
   backG.velocityX = backG.velocityX+0.01
  drawSprites();
}