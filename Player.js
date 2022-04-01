class Player {
  constructor() {
    this.database = new Songs();
  }
  preloadSong(nameFile) {
    loadSound("sounds/" + nameFile + ".mp3");
  }

  arrayOfSongs() {
    this.database.newSong({
      name: "We are legion",
      artist: "Ambassador21",
      img: "c",
      duration: 1.3,
      x: 50,
      y: 50,
      file: this.preloadSong("ambassador21-WeAreLegion"),
    });
    this.database.newSong({
      name: "4101",
      artist: "Roly Porter",
      img: "g",
      duration: 2.0,
      x: 50,
      y: 60,
      file: this.preloadSong("rolyPorter-4101"),
    });
    this.database.newSong({
      name: "OX1",
      artist: "Tommy FourSeven",
      img: "k",
      duration: 1.0,
      x: 50,
      y: 60,
      file: this.preloadSong("tommyFourSeven-OX1"),
    });

    // list all the players
    console.log(this.database.numberOfSongs + " Songs");
    console.log(this.database.allSongs);

    // make them do something
  }
  playSong() {
    const getFile = this.database.file();
    console.log(getFile);
    getFile.allSongs.forEach((song) => song.play());
  }
  /*
  doSomething() {
    this.database.allSongs.forEach((song) => song.play());
  }*/
}
