class QuizOption {
  constructor(x, optionType, content) {
    this.x = x;
    this.y = 1000;
    this.w = 250;
    if (optionType == "TEXT2") {
      this.w = 533;
    }
    this.h = 140;
    this.c = color(20, 20, 20);
    this.selected = false;
    this.optionType = optionType; // TEXT2, TEXT4, IMAGE4
    this.content = content;
  }

  setup() {
    this.selected = false;
  }

  draw() {
    fill(this.c);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h);
    if (this.optionType == "TEXT2" || this.optionType == "TEXT4") {
      fill(255);
      textAlign(CENTER, CENTER);
      if(quizIdx == 0 || quizIdx == 3){ //현진pt hj
        textSize(25);  //현진pt
        } else textSize(40); //현진pt
      text(this.content, this.x, this.y, this.w, this.h);
    } else if (this.optionType == "IMAGE4") {
      image(this.content, this.x, this.y, this.w, this.h);
    }
  }

  mousePressed() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.selected = true;
    }
  }

  //   optionText(a, b, c, d) {
  //     fill(255);
  //     textAlign(CENTER, CENTER);
  //     textSize(40);
  //     text(a, 380, 1065);
  //     text(b, 663, 1065);
  //     text(c, 943, 1065);
  //     text(d, 1230, 1065);
  //   }

  //   correct() {
  //     if (
  //       mouseX > this.x &&
  //       mouseX < this.x + this.w &&
  //       mouseY > this.y &&
  //       mouseY < this.y + this.h
  //     ) {
  //       //console.log("clicked, correct");
  //       return true;
  //     } else {
  //       //      console.log("not clicked");
  //       return false;
  //     }
  //     // 이 함수가 반환하는 값은 true 아니면 false
  //   }

  //   incorrect() {
  //     if (
  //       mouseX > this.x &&
  //       mouseX < this.x + this.w &&
  //       mouseY > this.y &&
  //       mouseY < this.y + this.h
  //     ) {
  //       //console.log("clicked, incorrect");
  //       return true;
  //     } else {
  //       //      console.log("not clicked");
  //       return false;
  //     }
  //   }
}

//정답인 opt1의 correct
//오답인 opt2, opt3, opt4의 incorrect 둘 다 만들어놓자
