let emojis = ["😂", "🔥", "😍", "🎉", "👍", "💯", "🍕", "🌟", "🐱", "🍔"];
function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  strokeWeight(5);
  noFill();
  stroke(32, 8, 64);
  describe(
    'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of dark purple cubes on a light pink background.'
  );
}

function draw() {
  background(250, 180, 200);

  // Call every frame to adjust camera based on mouse/touch
  orbitControl();

  // Rotate rings in a half circle to create a sphere of cubes
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    // Rotate cubes in a full circle to create a ring of cubes
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();

      // Rotate from center of sphere
      rotateZ(zAngle);
      rotateX(xAngle);

      // Then translate down 400 units
      translate(0, 400, 0);
      box();
      pop();
    }
  }
}


function setup(){
  createCanvas(400, 400);
  background(220);

  // Draw face shape
  fill(255, 224, 189); // Skin color
  ellipse(200, 200, 150, 200); // Head

  // Draw eyes
  fill(255);
  ellipse(180, 180, 30, 20); // Left eye
  ellipse(220, 180, 30, 20); // Right eye
  fill(0);
  ellipse(180, 180, 10, 10); // Left pupil
  ellipse(220, 180, 10, 10); // Right pupil

  // Draw mustache
  fill(0); // Black mustache
  arc(200, 220, 60, 20, 0, PI); // Mustache

  // Draw mouth
  fill(255, 100, 100);
  arc(200, 240, 50, 20, 0, PI); // Smile

  // Draw pink shirt
  fill(255, 105, 180); // Pink color
  rect(150, 300, 100, 80); // Shirt body
  triangle(150, 300, 200, 250, 250, 300); // Collar

  // Draw black hair
  fill(0); // Black color for hair
  arc(200, 150, 140, 100, PI, TWO_PI); // Hairline

  // Add emojis around him
  textSize(24);
  for (let i = 0; i < 20; i++) {
    let emoji = random(emojis);
    let x = random(width);
    let y = random(height);
    text(emoji, x, y);
  }
}

function draw() {
  // Static image, no animation needed
}
