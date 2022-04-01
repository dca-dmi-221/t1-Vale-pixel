let imgBackground;
let player = new Player();

function preload() {
 
  //player.preloadSong();
 
}

function setup() {
  let canva = createCanvas(1098, 627);
 canva.mousePressed(canvasPressed);
 // imgBackground = createImg("resources/background.png");
 // imgBackground.position(0, 0);
 
  player.arrayOfSongs();
  // database.doSomething();
}
function draw() {
 // imgBackground;
}
function canvasPressed() {
  player.playSong();
}
