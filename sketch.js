var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var track;

function preload(){
  track = loadImage("images/track.png");
  car1_img = loadImage("images/Running boy.jpg");
  car2_img = loadImage("images/Running girl.jpg");
  car3_img = loadImage("images/ Running boy 2.jpg");
  car4_img = loadImage("images/ Running girl 2.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
