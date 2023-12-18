class Timer {
  constructor(seconds) {
    this.startTime = 0;
    this.duration = seconds * 1000; // Convert seconds to milliseconds
    this.shakeThreshold = 3000; // Time threshold to start shaking
    this.shakeAmount = 10; // Amount of shaking
    this.shaking = false;
    this.soundPlayed = false;
    this.running = false;
    this.currentSecond = seconds;
    this.lastFrameCount = 0;
    this.timeout = false;
  }

  start() {
    this.startTime = millis();
    this.running = true;

    //this.soundPlayed = false;

    // if (!this.soundPlayed) {
    //   timerSound.play(); // Play the ticking sound only if not already played
    //   this.soundPlayed = true;
    // }
  }

  display() {
    if (!this.running) {
      fill(255, 88, 88); // Background color
      noStroke();

      // Draw a rectangle to clear the previous timer text
      rect(100, 200, 260, 180); // Adjust the size and position as needed

      return; // Don't display anything if the timer is not running
    }

    if (!this.soundPlayed) {
      timerSound.play(); // Play the ticking sound only if not already played
      this.soundPlayed = true;
    }

    let elapsed = millis() - this.startTime;
    let remaining = max(0, this.duration - elapsed);
    let seconds = ceil(remaining / 1000);

    // Update the current second if the frameCount has changed
    if (frameCount > this.lastFrameCount) {
      this.lastFrameCount = frameCount;
      this.currentSecond = seconds;
    }

    textAlign(LEFT, TOP);
    textSize(50);
    fill(255, 88, 88); // Background color
    noStroke();

    // Draw a rectangle to clear the previous timer text
    rect(100, 200, 260, 180); // Adjust the size and position as needed

    if (this.currentSecond > 3) {
      fill(0); // Text color
      text(
        "제한 시간:\n       " + this.currentSecond,
        width * 0.1,
        height * 0.2
      );
    } else {
      // Shake effect for the timer only
      push();
      translate(
        random(-this.shakeAmount, this.shakeAmount),
        random(-this.shakeAmount, this.shakeAmount)
      );

      // Play ticking sound if not already played
      if (!this.soundPlayed) {
        timerSound.play();
        this.soundPlayed = true;
      }

      fill(0); // Text color
      text(
        "제한 시간:\n       " + this.currentSecond,
        width * 0.1,
        height * 0.2
      );
      pop();
    }
    this.update();
  }

  reset() {
    this.running = false;
    this.timeout = false;
    this.soundPlayed = false;
  }

  update() {
    if (!this.running) {
      return; // Don't update anything if the timer is not running
    }

    let elapsed = millis() - this.startTime;

    // Check if the timer is over
    if (elapsed >= this.duration) {
      this.timeout = true;
      this.running = false;
      timerSound.stop(); // Stop the ticking sound
      // console.log("Time out!");
    }
  }
}
