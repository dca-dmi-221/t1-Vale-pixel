class Database {
  constructor() {
    this.database = new Songs();
  }
  arrayOfSongs() {
    this.database.newSong({
      name: "We are legion",
      artist: "Ambassador21",
      img: "c",
      duration: 1.3,
      x: 50,
      y: 50,
      file: "sounds/ambassador21-WeAreLegion.mp3",
    });
    this.database.newSong({
      name: "4101",
      artist: "Roly Porter",
      img: "g",
      duration: 2.0,
      x: 50,
      y: 60,
      file: "sounds/rolyPorter-4101.mp3",
    });
    this.database.newSong({
      name: "OX1",
      artist: "Tommy FourSeven",
      img: "k",
      duration: 1.0,
      x: 50,
      y: 60,
      file: "sounds/tommyFourSeven-OX1.mp3",
    });
  }
  getData() {
    return this.database.allSongs;
  }

  getFile() {
    let i = this.database.allSongs;
    return i.map((a) => a.file);
  }

  getName() {
    let i = this.database.allSongs;
    return i.map((a) => a.name);
  }
  getArtist() {
    let i = this.database.allSongs;
    return i.map((a) => a.artist);
  }
}
