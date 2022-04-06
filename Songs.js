class Songs {
  constructor() {
    this.songs = [];
  }

  newSong({ name, artist, img, duration, x, y, file }) {
    let print = new Song({ name, artist, img, duration, x, y, file });
    this.songs.push(print);
    return print;
  }
  get allSongs() {
    return this.songs;
  }
  get numberOfSongs() {
    return this.songs.length;
  }
  get files() {
    return this.songs.map((a) => a.file);
  }
}
