class Maintextbox {
  constructor() {
    this.x = 250;
    //    this.x = width/2-400;
    this.y = 740;
    //    this.y = height / 2 + 20;
    this.w = 1100;
    this.h = 230;
    this.c = color(20,20,20);
  }

  display() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }
}
