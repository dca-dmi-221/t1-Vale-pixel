class Button {
  constructor({ posX, posY, imgOne, secondImg }) {
    this.x = posX;
    this.y = posY;
    this.imgOne = preload(imgOne);
    this.secondImg = preload(secondImg);
  }

  showPlayOrPause() {
    stroke(0);
    // tint the image on mouse hover
    if (this.over()) {
      this.secondImg;
      // tint(204, 0, 128);
    } else {
      this.imgOne;
    }
    image(this.imgOne, this.x, this.y);
  }

  // over automatically matches the width & height of the image read from the file
  // see this.img.width and this.img.height below
  over() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.imgOne.width &&
      mouseY > this.y &&
      mouseY < this.y + this.imgOne.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
