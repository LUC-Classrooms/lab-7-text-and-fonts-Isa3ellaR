/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Palatino");
}

function draw() {
  background(0);
  fill(255)
  textSize(16);
  text("Press the mouse for a little joke...", 20, 30)
  textSize(25)
  text("How does a banana answer the phone??", 20, 90);

  if(mouseIsPressed){
    textSize(32);
    fill(252, 227, 3)
    text("YELLOW?!", 20, 160);
  }
 
  

}
