class Option {
  constructor(x) {
    this.x = x;
    this.y = 1000;
    //    this.y = height / 2 + 350;
    this.w = 250;
    this.h = 140;
    this.c = color(20, 20, 20);
    this.isMouseOver = false;
  }

  display() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }

  optionText(a, b, c, d) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(40);
    text(a, 380, 1065);
    text(b, 663, 1065);
    text(c, 943, 1065);
    text(d, 1230, 1065);
  }

  correct() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      //console.log("clicked, correct");
      return true;
    } else {
      //      console.log("not clicked");
      return false;
    }
    // 이 함수가 반환하는 값은 true 아니면 false
  }

  incorrect() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      //console.log("clicked, incorrect");
      return true;
    } else {
      //      console.log("not clicked");
      return false;
    }
  }
}

//정답인 opt1의 correct
//오답인 opt2, opt3, opt4의 incorrect 둘 다 만들어놓자
