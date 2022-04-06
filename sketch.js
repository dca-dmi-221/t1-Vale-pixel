let soundtrack = new Database();
let imgBackground;
let playImg;
let loadSounds;
let currenTime;

let getData = soundtrack.getData();
console.log(getData);
let getAudio;
let getName;
let getArtist;

songs = [];
songNames = [];
index = 0;
let indexSong = 0;
let volume;

function preload() {
  soundtrack.getFile();
  soundtrack.arrayOfSongs();
  getAudio = soundtrack.getFile();
  console.log(getAudio);

  getAudio.forEach((audio) => {
    songs.push(loadSound(audio));
  });
}

function setup() {
  createCanvas(1366, 685);

  getName = soundtrack.getName();
  getArtist = soundtrack.getArtist();

  console.log(getAudio[indexSong]);

  playButton = createButton('<i class="material-icons">play_arrow</i>');
  playButton.mousePressed(Play);
  playButton.position(659, 568);
  playButton.child('<i class="material-icons">cloud</i>');

  pauseButton = createButton('<i class="material-icons">stop</i>');
  pauseButton.mousePressed(Stop);
  pauseButton.position(600, 568);

  previousButton = createButton('<i class="material-icons">skip_previous</i>');
  previousButton.mousePressed(prevSong);
  previousButton.position(530, 568);
  previousButton.child('<i class="material-icons">cloud</i>');

  botonNext = createButton('<i class="material-icons">skip_next</i>');
  botonNext.mousePressed(nextSong);
  botonNext.position(730, 568);

  volume = createSlider(0, 1, 0.5, 0.01);
  volume.position(1174, 640);
  songs.forEach((a) => {
    a.currentTime();
  });
}
function draw() {
  /*
  textSize(24);
  text(getNames[indexSong], width / 2, height / 2);*/
  songs[indexSong].setVolume(volume.value());
}

function Play() {
  songs[indexSong].play();
}

function Stop() {
  songs[indexSong].stop();
  console.log("isPaused");
}

function prevSong() {
  Stop();
  indexSong--;

  if (indexSong < 0) {
    indexSong = songs.length - 1;
  }
  Play();
}

function nextSong() {
  Stop();
  indexSong--;

  if (indexSong < 0) {
    indexSong = songs.length - 1;
  }
  Play();
}

function currentTimeSong() {
  songs.forEach((a) => {
    a.currentTime();
    console.log(a.currenTime);
  });
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
