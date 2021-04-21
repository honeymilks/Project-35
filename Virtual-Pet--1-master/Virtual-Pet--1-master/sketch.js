var dog,happyDog,database,foodS,foodStock

function preload()
{
dog=loadImage("images/dogImg.png")
dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
dog=createSprites(250,250,50,50)
dog.adddImage(this.image)
foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}
  drawSprites();
  //add styles here
}
function readstock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



