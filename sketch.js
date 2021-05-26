var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(285,580,200,30);
    block2.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(490,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(695,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 3
    ball.velocityY = 4
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        
    }
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "red";
    
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
        
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        
    }



    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
