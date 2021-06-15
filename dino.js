const game = Runner.instance_;

(function tick() {
  if (game.crashed || game.paused) {
    return requestAnimationFrame(tick);
  };

	let obstacles = game.horizon.obstacles;
	let tRex = game.tRex;

    if (obstacles.length) {
        
    let obstacle = obstacles[0];
    let tRexWidth = tRex.config.WIDTH;

	const jump = () => {
        document.dispatchEvent(new KeyboardEvent("keydown", {keyCode: 38}));
    };

    const duck = () => {
         document.dispatchEvent(new KeyboardEvent("keydown", {keyCode: 40}));
         setTimeout(function() {
            document.dispatchEvent(new KeyboardEvent("keyup", {keyCode: 40}));
         },300);
    };

    if (obstacle.xPos - tRex.xPos - tRexWidth <= 20 && obstacle.yPos > 85) {
        if (!tRex.jumping) {
            jump();     
        };
    } else if (obstacle.xPos - tRex.xPos - tRexWidth <= 20 && obstacle.yPos < 85) {
        if (!tRex.ducking) {
            duck();
        };
    };
};

  requestAnimationFrame(tick);
}());