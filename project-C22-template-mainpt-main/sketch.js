const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var arquero;
var base;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var Options = {
    isStatic: true,
  }
  //criar corpo da base do jogador
  base = Bodies.rectangle(200, 350, 180, 150, Options);

  World.add(world, base);
  //criar corpo do jogador
  arquero = Bodies.rectangle(250, base.position.y-160, 50, 180, Options)
  World.add(world, arquero)

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(playerimage, arquero.position.x, arquero.position.y, 50,180);

  image(baseimage, base.position.x, base.position.y, 180,150)

  //exibir a imagem da base do jogador usando a função image()


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
