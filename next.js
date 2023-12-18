class Next {
  constructor() {
    this.x = width / 2 + 600;
    this.y = height / 2 + 350;
    this.w = 100;
    this.h = 100;
    this.c = color(120, 120, 120);
    this.hidden = false;
  }

  display() {
    if (!this.hidden) {
      fill(this.c);
      rect(this.x, this.y, this.w, this.h);
      //    triangle(this.x, this.y, this.x+this.w, this.y-this.h/2, this.x, this.y-this.h); 내일 삼각형으로 만들게요...
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(30);
      text("다음", this.x + this.w / 2, this.y + this.h / 2);
    }
  }

  clicked() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h &&
      !this.hidden // 클릭 가능한 상태인지 확인
    ) {
      return true;
    } else {
      return false;
    }
    // 이 함수가 반환하는 값은 true 아니면 false
  }

  hide() {
    this.hidden = true; // 숨김 처리
    //fill(255, 88, 88);
    //rect(width / 2 + 600, height / 2 + 350, 250, 140);

    //console.log("this.hidden = true");
  }

  show() {
    this.hidden = false; // 표시 처리
 //   console.log("this.hidden = false");
  }
}
