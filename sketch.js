const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonImage;
var backgroundImage, bg;
var gameState = "onLauncher";

function preload(){
    polygonImage = loadImage("sprites/polygon.png");
    getTime();
}

function setup(){
    createCanvas(1100,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Base(550,height,1100,25);
    stand1 = new Base(540,450,250,10);
    stand2 = new Base(850,230,200,10);

    //first pyramid
    //level one
    block1 = new Block(450,425,30,40);
    block2 = new Block(480,425,30,40);
    block3 = new Block(510,425,30,40);
    block4 = new Block(540,425,30,40);
    block5 = new Block(570,425,30,40);
    block6 = new Block(600,425,30,40);
    block7 = new Block(630,425,30,40);

    //level two
    block8 = new Block(480,385,30,40);
    block9 = new Block(510,385,30,40);
    block10 = new Block(540,385,30,40);
    block11 = new Block(570,385,30,40);
    block12 = new Block(600,385,30,40);

    //level three
    block13 = new Block(510,345,30,40);
    block14 = new Block(540,345,30,40);
    block15 = new Block(570,345,30,40);

    //top
    block16 = new Block(540,305,30,40);

    //second pyramid
    //level one 
    block17 = new Block(790,210,30,40);
    block18 = new Block(820,210,30,40);
    block19 = new Block(850,210,30,40);
    block20 = new Block(880,210,30,40);
    block21 = new Block(910,210,30,40);

    //level two
    block22 = new Block(820,165,30,40);
    block23 = new Block(850,165,30,40);
    block24 = new Block(880,165,30,40);

    //top
    block25 = new Block(850,125,30,40);
    
    polygon = Bodies.circle(160,200,20);
    World.add(world, polygon);

    launcher = new Launcher(this.polygon, {x:160, y:200});
}

function draw(){
    if (backgroundImage){
        background(backgroundImage);        
    }

    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();

    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("cyan");
    block13.display();
    block14.display();
    block15.display();
    
    fill("lightgreen");
    block16.display();

    fill("skyblue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("cyan");
    block22.display();
    block23.display();
    block24.display();

    fill("pink");
    block25.display();
    
    imageMode(CENTER)
    image(polygonImage, polygon.position.x, polygon.position.y, 50, 50);

    launcher.display();
}

function mouseDragged(){
    if (gameState !== "launched"){
        Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
    }
}

function mouseReleased(){
    launcher.fly();
    gameState = "launched";
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(this.polygon, {x: 160, y: 200});
        launcher.attach(this.polygon);
        gameState = "onLauncher";
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    console.log(responseJson);
    
    var datetime = responseJson.datetime;
    console.log(datetime);

    var hour = datetime.slice(11,13);
    console.log(hour);

    if (hour >= 06 && hour <= 18){
        bg = "sprites/bg1.png";
    }

    else {
        bg = "sprites/bg2.jpg";
    }

    backgroundImage = loadImage(bg);
}