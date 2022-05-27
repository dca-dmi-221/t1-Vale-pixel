class Song {
  constructor({ name, artist, img,duration, x, y, file  }) {
    this.name = name;
    this.artist = artist;
    this.img = img;
    this.duration = duration;
    this.x = x;
    this.y = y;
    this.file = file;
    
  }

  showDetails(){
    text(`
    ${this.name}
    ${this.artist}
    ${this.duration}
`, this.x, this.y);

//image(this.img, this.x, this.y)
  }
  prueba(){
    console.log(this.name + 'impreso')
  }
}
