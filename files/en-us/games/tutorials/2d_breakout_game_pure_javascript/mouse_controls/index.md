---
title: Mouse controls
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up")}}

This is the **9th step** out of 10 of the [Gamedev Canvas tutorial](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). You can find the source code as it should look after completing this lesson at [Gamedev-Canvas-workshop/lesson9.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html).

The game itself is actually finished, so let's work on polishing it up. We have already added keyboard controls, but we could easily add mouse controls too.

## Listening for mouse movement

Listening for mouse movement is even easier than listening for key presses: all we need is the listener for the {{domxref("Element/mousemove_event", "mousemove")}} event. Add the following line in the same place as the other event listeners, just below the `keyup event`:

```js
document.addEventListener("mousemove", mouseMoveHandler, false);
```

## Anchoring the paddle movement to the mouse movement

We can update the paddle position based on the pointer coordinates — the following handler function will do exactly that. Add the following function to your code, below the previous line you added:

```js
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
```

In this function we first work out a `relativeX` value, which is equal to the horizontal mouse position in the viewport (`e.clientX`) minus the distance between the left edge of the canvas and left edge of the viewport (`canvas.offsetLeft`) — effectively this is equal to the distance between the canvas left edge and the mouse pointer. If the relative X pointer position is greater than zero and lower than the Canvas width, the pointer is within the Canvas boundaries, and the `paddleX` position (anchored on the left edge of the paddle) is set to the `relativeX` value minus half the width of the paddle, so that the movement will actually be relative to the middle of the paddle.

The paddle will now follow the position of the mouse cursor, but since we're restricting the movement to the size of the Canvas, it won't disappear completely off either side.

## Compare your code

This is the latest state of the code to compare against:

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/vt7y5hcp/","","395")}}

> **Note:** Try adjusting the boundaries of the paddle movement, so the whole paddle will be visible on both edges of the Canvas instead of only half of it.

## Next steps

Now we've got a complete game we'll finish our series of lessons with some more small tweaks — [Finishing up](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up")}}
