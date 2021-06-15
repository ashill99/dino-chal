const game = Runner.instance_;

(function tick() {
  if (game.crashed || game.paused) {
    return requestAnimationFrame(tick);
  }

	let obstacles = game.horizon.obstacles;
	let tRex = game.tRex;

    if(obstacles.length) {
    let obstacle = obstacles[0];
    let tRexWidth = tRex.config.WIDTH;
	let jump = document.dispatchEvent(new KeyboardEvent("keydown", {keyCode: 38}));
    let duck = document.dispatchEvent(new KeyboardEvent("keydown", {keyCode: 40}));

    if (obstacle.xPos - tRex.xPos - tRexWidth <= 20 && obstacle.yPos > 85) {
        if (!tRex.jumping) {
            console.log("jump");
            console.log(obstacle);
            jump  ;     
        }
    }

    while (obstacle.xPos - tRex.xPos - tRexWidth <= 20 && obstacle.yPos < 85) {
        if (!tRex.ducking) {
            console.log("duck");
            console.log(obstacle);
            duck;
            console.log("get up")
            setTimeout(jump, 200);
        }
    }
}

  requestAnimationFrame(tick);
}());