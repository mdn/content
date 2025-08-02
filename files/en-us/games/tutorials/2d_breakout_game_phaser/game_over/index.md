---
title: Game over
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}

This is the **8th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). To make the game more interesting we can introduce the ability to lose—if you don't hit the ball before it reaches the bottom edge of the screen, it will be game over.

## How to lose

To provide the ability to lose, we will disable the ball's collision with the bottom edge of the screen. Add the code below inside the `create()` method, at the very top:

```js
this.physics.world.checkCollision.down = false;
```

This will make the three walls (top, left and right) bounce the ball back, but the fourth (bottom) will disappear, letting the ball fall off the screen if the paddle misses it. We need a way to detect this and act accordingly. Add the following lines at the bottom of the `update()` method:

```js
const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
  this.physics.world.bounds,
  this.ball.getBounds(),
);
if (ballIsOutOfBounds) {
  // Game over logic
  alert("Game over!");
  location.reload();
}
```

Adding those lines will check if the ball sticks out of the world (in our case, the canvas) bounds and then show an alert. When you click on the resulting alert, the page will reload, allowing you to play again.

> [!NOTE]
> The UX here is quite sketchy because [`alert()`](/en-US/docs/Web/API/Window/alert) shows a system dialog and blocks the game. In a real game, you would probably want to design your own modal dialog using {{HTMLElement("dialog")}}.
>
> Also, we will later add a ["Start" button](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons), but here our game starts immediately when the page loads, so you may "lose" before you even start playing. To prevent the annoying dialog, we will remove the `alert()` call from now on.

## Compare your code

Here's what you should have so far, running live. To view its source code, click the "Play" button.

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
  ball;
  paddle;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
  }
  create() {
    this.physics.world.checkCollision.down = false;

    this.ball = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 25,
      "ball",
    );
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, -150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1);

    this.paddle = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 5,
      "paddle",
    );
    this.paddle.setOrigin(0.5, 1);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      // Game over logic
      location.reload();
    }
  }
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

Now the basic gameplay is in place, let's make it more interesting by introducing bricks to smash—it's time to [build the brick field](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}
