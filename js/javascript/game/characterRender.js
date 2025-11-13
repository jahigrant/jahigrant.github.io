// ------------------------------
// Game character render function
// ------------------------------

function drawGameChar() {

    //the game character
    if (isLeft && isFalling) {
      // add your jumping-left code


      //parachute
      let c = color('light gray');
      fill(c);
      rect(gameChar_x-20, gameChar_y - 100, 40, 20, 40, 40, 0);
//strings
let p = color('light gray');
fill(p);  
quad(
    gameChar_x + 20,
    gameChar_y - 80,
    gameChar_x + 18,
    gameChar_y - 80,
    gameChar_x + 6,
    gameChar_y - 50,
    gameChar_x + 6,
    gameChar_y - 50
  );
quad(
    gameChar_x - 20,
    gameChar_y - 80,
    gameChar_x - 18,
    gameChar_y - 80,
    gameChar_x - 6,
    gameChar_y - 50,
    gameChar_x - 6,
    gameChar_y - 50
  );


      //head
      fill(217, 215, 176);
      rect(gameChar_x+10, gameChar_y - 64, -20, 20);
  
      //body
      fill(53, 69, 150);
      rect(gameChar_x - 7, gameChar_y - 42, 15, 35);
  
      //legs
      fill(50, 51, 59);
      quad(
        gameChar_x - 3,
        gameChar_y - 10,
        gameChar_x - 8,
        gameChar_y - 10,
        gameChar_x - 14,
        gameChar_y,
        gameChar_x - 9,
        gameChar_y
      );
  
      rect(gameChar_x + 4, gameChar_y - 10, 5, 10);
  
      //arm left
      fill(50, 51, 59);
      quad(
        gameChar_x - 2,
        gameChar_y - 40,
        gameChar_x + 3,
        gameChar_y - 40,
        gameChar_x - 6,
        gameChar_y - 60,
        gameChar_x - 11,
        gameChar_y - 60
      );
    } else if (isRight && isFalling) {
      // add your jumping-right code

      //parachute
      let c = color('light gray');
      fill(c);
      rect(gameChar_x-20, gameChar_y - 100, 40, 20, 40, 40, 0);
//strings
let p = color('light gray');
fill(p);
quad(
    gameChar_x - 20,
    gameChar_y - 80,
    gameChar_x - 18,
    gameChar_y - 80,
    gameChar_x - 6,
    gameChar_y - 50,
    gameChar_x - 6,
    gameChar_y - 50
  );
  quad(
    gameChar_x + 20,
    gameChar_y - 80,
    gameChar_x + 18,
    gameChar_y - 80,
    gameChar_x + 6,
    gameChar_y - 50,
    gameChar_x + 6,
    gameChar_y - 50
  );

      //head
      fill(217, 215, 176);
      rect(gameChar_x+10, gameChar_y - 64, -20, 20);
  
      //body
      fill(53, 69, 150);
      rect(gameChar_x - 7, gameChar_y - 42, 15, 35);
  
      //legs
      fill(50, 51, 59);
      quad(
        gameChar_x - 3 + 12,
        gameChar_y - 10,
        gameChar_x - 8 + 12,
        gameChar_y - 10,
        gameChar_x - 14 + 22,
        gameChar_y,
        gameChar_x - 9 + 22,
        gameChar_y
      );
  
      rect(gameChar_x - 8, gameChar_y - 10, 5, 10);
  
      //arm right
      fill(50, 51, 59);
      quad(
        gameChar_x - 2,
        gameChar_y - 40,
        gameChar_x + 3,
        gameChar_y - 40,
        gameChar_x + 11,
        gameChar_y - 60,
        gameChar_x + 6,
        gameChar_y - 60
      );
    } else if (isLeft) {
      // add your walking left code
      //head
      fill(217, 215, 176);
      rect(gameChar_x+10, gameChar_y - 64, -20, 20);
  
      //arm right
      fill(50, 51, 59);
      quad(
        gameChar_x - 2,
        gameChar_y - 40,
        gameChar_x + 3,
        gameChar_y - 40,
        gameChar_x + 6,
        gameChar_y - 20,
        gameChar_x + 11,
        gameChar_y - 20
      );
  
      //body
      fill(53, 69, 150);
      rect(gameChar_x - 7, gameChar_y - 42, 15, 35);
  
      //legs
      fill(50, 51, 59);
      quad(
        gameChar_x - 3,
        gameChar_y - 10,
        gameChar_x - 8,
        gameChar_y - 10,
        gameChar_x - 14,
        gameChar_y,
        gameChar_x - 9,
        gameChar_y
      );
  
      rect(gameChar_x + 4, gameChar_y - 10, 5, 10);
  
      //arm left
      fill(50, 51, 59);
      quad(
        gameChar_x - 2,
        gameChar_y - 40,
        gameChar_x + 3,
        gameChar_y - 40,
        gameChar_x - 6,
        gameChar_y - 20,
        gameChar_x - 11,
        gameChar_y - 20
      );
    } else if (isRight) {
      // add your walking right code
      //head
      fill(217, 215, 176);
      rect(gameChar_x+10, gameChar_y - 64, -20, 20);
  
      //arm left
      fill(50, 51, 59);
      quad(
        gameChar_x - 2,
        gameChar_y - 40,
        gameChar_x + 3,
        gameChar_y - 40,
        gameChar_x - 6,
        gameChar_y - 20,
        gameChar_x - 11,
        gameChar_y - 20
      );
  
      //body
      fill(53, 69, 150);
      rect(gameChar_x - 7, gameChar_y - 42, 15, 35);
  
      //legs
      fill(50, 51, 59);
      quad(
        gameChar_x - 3 + 12,
        gameChar_y - 10,
        gameChar_x - 8 + 12,
        gameChar_y - 10,
        gameChar_x - 14 + 22,
        gameChar_y,
        gameChar_x - 9 + 22,
        gameChar_y
      );
  
      rect(gameChar_x - 8, gameChar_y - 10, 5, 10);
  
      //arm right
      fill(50, 51, 59);
      quad(
        gameChar_x - 2,
        gameChar_y - 40,
        gameChar_x + 3,
        gameChar_y - 40,
        gameChar_x + 11,
        gameChar_y - 20,
        gameChar_x + 6,
        gameChar_y - 20
      );
    } else if (isFalling || isPlummeting) {
      // add your jumping facing forwards code

      //parachute
      let c = color('light gray');
      fill(c);
      rect(gameChar_x-20, gameChar_y - 100, 40, 20, 40, 40, 0);
//strings
let p = color('light gray');
fill(p);
quad(
    gameChar_x - 20,
    gameChar_y - 80,
    gameChar_x - 18,
    gameChar_y - 80,
    gameChar_x - 6,
    gameChar_y - 50,
    gameChar_x - 6,
    gameChar_y - 50
  );
  quad(
    gameChar_x + 20,
    gameChar_y - 80,
    gameChar_x + 18,
    gameChar_y - 80,
    gameChar_x + 6,
    gameChar_y - 50,
    gameChar_x + 6,
    gameChar_y - 50
  );

  
      //head
      fill(217, 215, 176);
      rect(gameChar_x-10, gameChar_y - 64, 20, 20);
  
      //body
      fill(53, 69, 150);
      rect(gameChar_x - 7, gameChar_y - 42, 15, 35);
  
      //legs
      fill(50, 51, 59);
      rect(gameChar_x - 8, gameChar_y - 10, 5, 10);
      rect(gameChar_x + 4, gameChar_y - 10, 5, 10);
  
      //arms
      fill(50, 51, 59);
      rect(gameChar_x - 12, gameChar_y - 58, 5, 20);
      rect(gameChar_x + 8, gameChar_y - 58, 5, 20);
    } else {
      // add your standing front facing code
      //head
      fill(217, 215, 176);
      rect(gameChar_x-10, gameChar_y - 64, 20, 20);
  
      //body
      fill(53, 69, 150);
      rect(gameChar_x - 7, gameChar_y - 42, 15, 35);
  
      //legs
      fill(50, 51, 59);
      rect(gameChar_x - 8, gameChar_y - 10, 5, 10);
      rect(gameChar_x + 4, gameChar_y - 10, 5, 10);
  
      //arms
      fill(50, 51, 59);
      rect(gameChar_x - 12, gameChar_y - 42, 5, 20);
      rect(gameChar_x + 8, gameChar_y - 42, 5, 20);
    }
  }