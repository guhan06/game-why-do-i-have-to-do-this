var pitGenChance = 3; // a variable from 0 - 9 that controls chance of a pit being generated
var prevGeneratedPit = false;
var groundSprite = 'ground';
var createPits = true;

function initializeGroundGroup() {
	groundGroup = game.add.group();
  groundGroup.enableBody = true;
  game.physics.arcade.enableBody(groundGroup);

  initialGroundGroup = game.add.group();
  initialGroundGroup.enableBody = true;
  game.physics.arcade.enableBody(initialGroundGroup);
}

function createGround() {
	// prev generated pit is true if a pit was generated in the last call of createGround, else it is false
	// the pitGenChange is divided by ten to become a decimal between 0 and 1, between Math.random() generates a number between
	// 0 and 1. if the random number generated is less than the pitGenChance number, a pit is generated
	// the higher the pitGenCHance number becomes, the greater the chance of the random number being less than it becomes, and a pit
	// is more likely to be generated

  if ( createPits && !prevGeneratedPit  ) {
  		if ( Math.random() < ( pitGenChance / 10 ) ) {
  			prevGeneratedPit = true;
  		}
  } else if( true ) {
    var groundInstance = groundGroup.create( windowW, windowH - platformHeight, groundSprite);
    groundInstance.body.velocity.x = -scrollSpeed;
    groundInstance.body.immovable = true;
    groundInstance.width = 200;  
  	prevGeneratedPit = false;
  }

}

function createInitalGround(groundStartHeight, sprite, multiplier) {
  var initialGroundInstance = initialGroundGroup.create(0, groundStartHeight, sprite);
  initialGroundInstance.width = windowW * multiplier;
  initialGroundInstance.body.velocity.x = -scrollSpeed;
  initialGroundInstance.body.immovable = true;
}

function destroyOldGround() {
  //get rid of old ground once it goes offscreen
  groundGroup.forEach(function(ground) {
    if (ground.x < -ground.width) {
      ground.kill();
    }
  });
}