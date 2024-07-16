---
title: CSS animation tips and tricks
slug: Web/CSS/CSS_animations/Tips
page-type: guide
---

{{CSSRef}}

CSS animations make it possible to do incredible things with the elements that make up your documents and apps. However, there are things you might want to do that aren't obvious, or clever ways to do things that you might not come up with right away. This article is a collection of tips and tricks we've found that may make your work easier, including how to run a stopped animation again.

## Run an animation again

The [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) specification doesn't offer a way to run an animation again. You can't just set the element's {{cssxref("animation-play-state")}} to `"running"` again. Instead, you have to use JavaScript to get a completed animation to replay.

Here's one way to do it that we feel is stable and reliable enough to suggest to you.

### HTML

First, let's define the HTML for a {{HTMLElement("div")}} we wish to animate and a button that will play (or replay) the animation.

```html
<div class="box"></div>
<button class="runButton">Run the animation</button>
```

### CSS

Let's style the box using CSS.

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

### JavaScript

Next, we'll look at the JavaScript that does the work. The `playAnimation()` function is to be called when the user clicks on the run button. Instead of {{cssxref("@keyframes")}} at-rule we [define the keyframes in JavaScript](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats).

```js
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");

/*
  equivalent to the following CSS @keyframes

  @keyframes colorChange {
    0% {
      background-color: grey;
    }
    100% {
      background-color: lime;
    }
  }
*/
const colorChangeFrames = { backgroundColor: ["grey", "lime"] };

function playAnimation() {
  box.animate(colorChangeFrames, 4000);
}
```

The `playAnimation` method calls {{domxref("Element.animate()")}} method on the box to play the animation. The `animate` method takes the `colorChangeFrames` keyframe object and animation duration as arguments.

Of course, we also need to add an event handler to our run button so it'll actually do something:

```js
button.addEventListener("click", playAnimation);
```

### Result

{{ EmbedLiveSample("Run_an_animation_again", "100%", "160") }}

## Waiting for an animation to complete before stopping

In the previous example, if the run button is clicked before the animation is completed, the current animation will abruptly stop and the animation restarts from the `0%` or `from` starting keyframe. If you would like the current animation iteration to be complete before starting a new one, we can disable the `run` button while the animation is running, reenabling it based on the `animationend` event. Alternatively, if we want to enable multiple iterations of the animation, we can check to see if an animation is running on the element and increment the `animation-iteration` count for each button click while the animation is running.

The following demo shows how you'd achieve this. You'll have to do the following modification to the same code:

```html hidden
<div class="box"></div>
<button class="runButton">Run the animation</button>
```

```css hidden
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

```js hidden
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");
const colorChangeFrames = { backgroundColor: ["grey", "lime"] };
```

```js
function playAnimation() {
  if (box.getAnimations().length === 0) {
    box.animate(colorChangeFrames, 4000);
  }
}
```

button.addEventListener("click", playAnimation);

{{ EmbedLiveSample("Waiting for an animation to complete before stopping", "100%", "160") }}

The code uses {{domxref("Element.getAnimations()")}} method to ensure there is no animation running on the element.

## Stacking context in animations

In the case of the `animation-fill-mode` [forwards](/en-US/docs/Web/CSS/animation-fill-mode#forwards) value, animated properties behave as if included in a set [`will-change`](/en-US/docs/Web/CSS/will-change) property value. If a new stacking context is created during the animation, the target element retains the stacking context after the animation has finished.

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
