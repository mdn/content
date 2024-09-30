---
title: Web animation API tips and tricks
slug: Web/API/Web_Animations_API/Tips
page-type: guide
---

{{CSSRef}}

CSS animations make it possible to do incredible things with the elements that make up your documents and apps. There are things you might want to do that aren't obvious and many clever ways to do things that may not be immediately apparent. This article is a collection of tips and tricks we've found that will hopefully make your work easier, including how to re-run a completed animation.

## Run an animation again

The [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) specification doesn't offer a way to run an animation again. You can't just set the element's {{cssxref("animation-play-state")}} to `"running"` again once the animation ends. Instead, you have to use JavaScript to get a completed animation to replay.

This is one way to do it that is a stable and reliable method.

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

Next, we'll look at the JavaScript that does the work. The `playAnimation()` function is to be called when the user clicks on the run button. Instead of using the {{cssxref("@keyframes")}} at-rule, we [define the keyframes in JavaScript](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats).

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

The `playAnimation` method calls the {{domxref("Element.animate()")}} method on the box to play the animation. The `animate()` method takes a keyframe object or array of keyframe objects and animation and animation options as arguments. In this case, we pass the method the `colorChangeFrames` keyframe object and an animation duration.

We also need to add an event handler to our run button so it will actually do something:

```js
button.addEventListener("click", playAnimation);
```

### Result

{{ EmbedLiveSample("Run_an_animation_again", "100%", "160") }}

## Waiting for an animation to complete before stopping

In the previous example, if the run button is clicked before the animation is completed, the current animation will abruptly stop and the animation will restart from the `0%` or `from` starting keyframe. If you would like the current animation iteration to be complete before starting a new one, we can disable the `run` button while the animation is running, reenabling it based on the [`finish`](/en-US/docs/Web/API/Animation/finish) event. Alternatively, if we want to enable multiple iterations of the animation, we can check to see if an animation is running on the element and increment the `animation-iteration` count for each button click while the animation is running.

In this example, we update our `playAnimation()` function to disable the button when clicked, and listen for the `finish` event to re-enable the button.

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

button.addEventListener("click", playAnimation);
```

```js
function playAnimation() {
  button.setAttribute("disabled", true);
  const anim = box.animate(colorChangeFrames, 4000);

  anim.addEventListener("finish", (event) => {
    button.removeAttribute("disabled");
  });
}
```

{{ EmbedLiveSample("Waiting for an animation to complete before stopping", "100%", "160") }}

The code disables the button and starts the animation. The button is re-enabled when the animation completes.

## Stacking context in animations

The properties that are animated during a CSS animation behave as if they were included in the [`will-change`](/en-US/docs/Web/CSS/will-change) property declaration. Any property that would create a stacking context, if marked as `will-change`, makes the element receive a new stacking context.

In the case of [`animation-fill-mode: forwards`](/en-US/docs/Web/CSS/animation-fill-mode#forwards) (and `both`), the animated properties remain at their final keyframe state after the animation is finished. The properties keep the `will-change` status, so if a new stacking context is created during the animation and is still present at the end of the animation, the target element retains the stacking context after the animation has finished.

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [Animation Interface](/en-US/docs/Web/API/Animation/Animation)
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
