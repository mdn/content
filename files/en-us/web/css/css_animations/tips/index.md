---
title: CSS animation tips and tricks
slug: Web/CSS/CSS_animations/Tips
page-type: guide
---

{{CSSRef}}

CSS animations make it possible to do incredible things with the elements that make up your documents and apps. However, there are things you might want to do that aren't obvious, or clever ways to do things that you might not come up with right away. This article is a collection of tips and tricks we've found that may make your work easier, including how to run a stopped animation again.

## Run an animation again

The [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) specification doesn't offer a way to run an animation again. There's no magic `resetAnimation()` method on elements, and you can't even just set the element's {{cssxref("animation-play-state")}} to `"running"` again. Instead, you have to use clever tricks to get a stopped animation to replay.

Here's one way to do it that we feel is stable and reliable enough to suggest to you.

### HTML

First, let's define the HTML for a {{HTMLElement("div")}} we wish to animate and a button that will play (or replay) the animation.

```html
<div class="box"></div>

<div class="runButton">Click me to run the animation</div>
```

### CSS

Now we'll define the animation itself using CSS. Some CSS that's not important (the style of the "Run" button itself) isn't shown here, for brevity.

```css hidden
.runButton {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}
```

```css
@keyframes colorchange {
  0% {
    background: yellow;
  }
  100% {
    background: blue;
  }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.changing {
  animation: colorchange 2s;
}
```

There are two classes here. The `"box"` class is the basic description of the box's appearance, without any animation information included. The animation details are included in the `"changing"` class, which says that the {{cssxref("@keyframes")}} named `"colorchange"` should be used over the course of two seconds to animate the box.

Note that because of this, the box doesn't start with any animation effects in place, so it won't be animating.

### JavaScript

Next we'll look at the JavaScript that does the work. The meat of this technique is in the `play()` function, which is called when the user clicks on the "Run" button.

```js
function play() {
  document.querySelector(".box").className = "box";
  requestAnimationFrame((time) => {
    requestAnimationFrame((time) => {
      document.querySelector(".box").className = "box changing";
    });
  });
}
```

This looks weird, doesn't it? That's because the only way to play an animation again is to remove the animation effect, let the document recompute styles so that it knows you've done that, then add the animation effect back to the element. To make that happen, we have to be creative.

Here's what happens when the `play()` function gets called:

1. The box's list of CSS classes is reset to `"box"`. This has the effect of removing any other classes currently applied to the box, including the `"changing"` class that handles animation. In other words, we're removing the animation effect from the box. However, changes to the class list don't take effect until the style recomputation is complete and a refresh has occurred to reflect the change.
2. To be sure that the styles are recalculated, we use {{domxref("window.requestAnimationFrame()")}}, specifying a callback. Our callback gets executed just before the next repaint of the document. The problem for us is that because it's before the repaint, the style recomputation hasn't actually happened yet!
3. Our callback cleverly calls `requestAnimationFrame()` a second time! This time, the callback is run before the next repaint, which is after the style recomputation has occurred. This callback adds the `"changing"` class back onto the box, so that the repaint will start the animation once again.

Of course, we also need to add an event handler to our "Run" button so it'll actually do something:

```js
document.querySelector(".runButton").addEventListener("click", play, false);
```

### Result

{{ EmbedLiveSample('Run_an_animation_again', 320, 160) }}

## Stopping an animation

Removing the {{cssxref("animation-name")}} applied to an element will make it jump or cut to its next state. If instead you'd like the animation to complete and then come to a stop you have to try a different approach. The main tricks are:

1. Make your animation as self-contained as possible. This means you should not rely on `animation-direction: alternate`. Instead you should explicitly write a keyframe animation that goes through the full animation in one forward repetition.
2. Use JavaScript and clear the animation being used when the `animationiteration` event fires.

The following demo shows how you'd achieve the aforementioned JavaScript technique:

```css
.slidein {
  animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}

.stopped {
  animation-name: none;
}

@keyframes slidein {
  0% {
    margin-left: 0%;
  }
  50% {
    margin-left: 50%;
  }
  100% {
    margin-left: 0%;
  }
}
```

```html
<h1 id="watchme">Click me to stop</h1>
```

```js
const watchme = document.getElementById("watchme");

watchme.className = "slidein";
const listener = (e) => {
  watchme.className = "slidein stopped";
};
watchme.addEventListener("click", () =>
  watchme.addEventListener("animationiteration", listener, false),
);
```

Demo <https://jsfiddle.net/morenoh149/5ty5a4oy/>

## See also

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{domxref("Window.requestAnimationFrame()")}}
