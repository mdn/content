---
title: "Animation: overallProgress property"
short-title: overallProgress
slug: Web/API/Animation/overallProgress
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Animation.overallProgress
---

{{APIRef("Web Animations")}}{{seecompattable}}

The **`overallProgress`** read-only property of the {{domxref("Animation")}} interface returns a number between `0` and `1` indicating the animation's overall progress towards its finished state. This is the overall progress across all of the animation's iterations, not each individual iteration.

`overallProgress` works consistently across all animations, regardless of the type of {{domxref("AnimationTimeline", "timeline")}}.

## Value

A number between `0` and `1`, or `null` if the animation lacks a timeline, is inactive or hasn't been played yet, or if its {{domxref("Animation/currentTime", "currentTime")}} is set to a non-time value.

If the animation's [`iterations`](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#iterations) property is set to `Infinity`, or if its {{domxref("Animation/currentTime", "currentTime")}} is set to a negative value, `overallProgress` will return `0`.

If the animation's [`duration`](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#duration) is set to `0`, `overallProgress` will return `1`.

## Examples

### Displaying a percentage progress

This demo uses `overallProgress` to create a "percentage progress" readout, which is displayed to the screen while an animation runs.

### HTML

The HTML contains a {{htmlelement("button")}} to press to start the animation, a {{htmlelement("p")}} element in which to display the percentage progress, and a {{htmlelement("div")}} that will be animated.

```html
<button>Run animation</button>
<p class="progress">Progress: 0%</p>
<div class="box"></div>
```

The demo's CSS provides some rudimentary styling, which is not important for understanding how the JavaScript works, therefore we have hidden it for brevity.

```css hidden
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.progress {
  font-weight: bold;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 40px 20px;
  border: 10px solid black;
  background: lightseagreen;
  margin: 0 auto;
}
```

### JavaScript

In the JavaScript, we start off by grabbing references to the {{htmlelement("button")}}, {{htmlelement("p")}}, and {{htmlelement("div")}} elements.

We then create:

- an `animation` variable which will reference the animation, once we've created it
- a [keyframes](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) array
- an options object containing timing properties.

```js
const btn = document.querySelector("button");
const progress = document.querySelector(".progress");
const box = document.querySelector(".box");

let animation;

const keyframes = [{ rotate: "0deg" }, { rotate: "360deg" }];

const timingProps = {
  duration: 3000,
  iterations: 1,
};
```

Next we add a `"click"` event listener to the `<button>` via [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) so that, when pressed, it:

1. Starts the animation running using {{domxref("Element.animate()")}}, passing it the keyframes and options defined earlier and assigning the returned {{domxref("Animation")}} instance to the `animation` variable.
2. Runs a function called `updateProgress()` via the {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} method, which handles updating the percentage process display.

```js
btn.addEventListener("click", () => {
  // Animate the box
  animation = box.animate(keyframes, timingProps);
  // Start updating the progress percentage via rAF()
  requestAnimationFrame(updateProgress);
});
```

Now let's define the `updateProgress()` function. This queries {{domxref("Animation.playState")}} to see if the animation is not finished. If it isn't finished, we grab the current value of `overallProgress`, multiplying it by 100 and rounding the result down to convert it to a whole percentage number, then update the `<p>` element's {{domxref("Node.textContent", "textContent")}} value with it. We then call `requestAnimationFrame(updateProgress)` again to re-run the progress percentage update.

If the animation is finished, we replace the percentage progress with a "Finished!" message, and don't call `requestAnimationFrame(updateProgress)`, so the progress percentage updates stop.

```js
function updateProgress() {
  // Check if the animation is finished
  if (animation.playState !== "finished") {
    // Convert overallProgress to a whole number percentage
    const progressPercentage = Math.floor(animation.overallProgress * 100);
    // Update the progress paragraph with the percentage
    progress.textContent = `Progress: ${progressPercentage}%`;
    // Only request the next frame if the animation is not finished
    requestAnimationFrame(updateProgress);
  } else {
    progress.textContent = "Finished!";
  }
}
```

### Result

The output looks like this. Try pressing the button to see the animation and associated progress indicator run.

{{ EmbedLiveSample("Displaying a percentage progress", "100%", 250) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
