class QuizReaction {
  constructor(reactionPages) {
    this.reactionPages = reactionPages;
    this.reactionPageIdx = 0;
    this.reactionEnd = false;
    this.currentReactionPage = reactionPages[0];
  }
  draw() {
    // console.log(this.reactionPageIdx);
    if (!this.reactionEnd) {
      let currentReactionPage = this.reactionPages[this.reactionPageIdx];
      this.currentReactionPage = currentReactionPage;

      let currentReactionText;
      if (currentReactionPage.type == "SOUND") {
        currentReactionPage.draw();
      } else {
        currentReactionText = currentReactionPage.draw();
      }

      if (currentReactionPage.sceneEnd) {
        this.reactionPageIdx += 1;
      }
      if (this.reactionPageIdx == this.reactionPages.length) {
        this.reactionEnd = true;
      }
      if (currentReactionPage.type == "SPACE") {
        return currentReactionText;
      }
      return "";
    }
  }
  // keyPressed() { //sh 주석
  //   if (!this.reactionEnd) {
  //     let currentReactionPage = this.reactionPages[this.reactionPageIdx];
  //     currentReactionPage.keyPressed();
  //   }
  // }

  mousePressed() {//sh
    if (!this.reactionEnd) {
      let currentReactionPage = this.reactionPages[this.reactionPageIdx];
      currentReactionPage.mousePressed();
    }
  }
}
