class QuizReactionPage {
  constructor(type, scene, sound, soundLength) {
    // console.log(type, scene, sound, soundLength);
    this.type = type;
    this.scene = scene;
    this.sound = sound;
    this.soundPlayed = false;
    this.soundLength = soundLength * 1000;
    if (soundLength < 0) {
      this.soundLength = (sound.duration() + 0.5) * 1000;
    }
    this.soundStartTime = 0;
    this.sceneEnd = false;
  }

  draw() {
    if (this.type == "SOUND") {
      if (!this.soundPlayed) {
        this.sound.play();
        this.soundPlayed = true;
        this.soundStartTime = millis();
      } else {
        if (millis() - this.soundStartTime > this.soundLength) {
          this.sound.stop();
          this.sceneEnd = true;
        }
      }
      this.scene();
    } else {
      return this.scene;
    }
  }

  // keyPressed() { //sh 주석
  //   if (this.type == "SPACE") {
  //       this.sceneEnd = true;
  //   }
  // }

  mousePressed() { //sh
    if (this.type == "SPACE") {
        this.sceneEnd = true;
    }
  }
}
