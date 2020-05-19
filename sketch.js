var ball;

var database,position;
var positionRef;

function setup(){
    database=firebase.database();
    positionRef=database.ref('ball/position');
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    positionRef.on ("value",readposition,showerror);

}
function readposition(data){
position=data.val();
ball.x=position.x
ball.y=position.y
}
function showerror(){}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    positionRef.set({
    x : position.x + x,
    y : position.y + y
    })
}
