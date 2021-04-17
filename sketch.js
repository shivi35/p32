const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    
    backgroundImg = loadImage("sprites/bg.png");
    


    Engine.update(engine);

    getbackground()


}

async function getBackgroundImg(){

    async function getbackground(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
        var responseJSON = await response.json()
        var datetime = responseJSON.datetime
        var hour = datetime.slice(11,13)
        console.log(hour)

}
