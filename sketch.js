var dog,dogImg,happyDog,database,foodStock,foodS;

function preload()
{
   dogImg = loadImage("images/dogImg1.png");
   happyDog = loadImage("images/dogImg.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(265,290,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.15
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();

  textSize(20);
  fill("red");
  stroke("blue");
  text(foodStock,0,250);

}

function writeStock(x)
{
  database.ref('/').update({
    Food:x
  });
}

function readStock(){
   foodS = data.val();
}

