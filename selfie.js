let emojis = ["😂", "🔥", "😍", "🎉", "👍", "💯", "🍕", "🌟", "🐱", "🍔"];

function setup() {
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
