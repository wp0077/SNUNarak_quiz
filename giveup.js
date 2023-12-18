class Giveup {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.isMouseOver = false;
  }

  display() {
    // Check if the mouse is over the button
    this.checkMouseOver();

    let d = dist(mouseX, mouseY, this.x, this.y);

    // Set button color based on mouse state
    if (d < this.diameter / 2) {
      fill(245, 185, 118); // Orange color when mouse is over
    } else {
      fill(255); // White color by default
    }

    // Draw the button
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);

    // Draw the text on the button
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    textSize(29);
    text("중도\n포기", this.x, this.y);
  }

  checkMouseOver() {
    // Check if the mouse is over the button
    let d = dist(mouseX, mouseY, this.x, this.y);
    this.isMouseOver = d < this.diameter / 2;
    return this.isMouseOver;
  }

  giveupClicked() {
    // Check if the mouse is over the button when clicked
    if (this.isMouseOver) {
      givingUp = true;
      //console.log("Giving up!");
    }
  }
}
