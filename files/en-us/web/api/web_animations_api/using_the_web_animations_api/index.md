---
title: Using the Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
page-type: guide
---

{{DefaultAPISidebar("Web Animations")}}

The Web Animations API lets us construct animations and control their playback with JavaScript. This article will start you off in the right direction with fun demos and tutorials featuring Alice in Wonderland.

## Meet the Web Animations API

The [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) opens the browser's animation engine to developers and manipulation by JavaScript. This API was designed to underlie implementations of both [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) and [CSS Transitions](/en-US/docs/Web/CSS/CSS_transitions), and leaves the door open to future animation effects. It is one of the most performant ways to animate on the Web, letting the browser make its own internal optimizations without hacks, coercion, or {{domxref("Window.requestAnimationFrame()")}}.

With the Web Animations API, we can move interactive animations from stylesheets to JavaScript, separating presentation from behavior. We no longer need to rely on DOM-heavy techniques such as writing CSS properties and scoping classes onto elements to control playback direction. And unlike pure, declarative CSS, JavaScript also lets us dynamically set values from properties to durations. For building custom animation libraries and creating interactive animations, the Web Animations API might be the perfect tool for the job. Let's see what it can do!

This page contains a suite of examples utilizing the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API), inspired by [Alice in Wonderland](https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland). These examples are created by and shared at the courtesy of [Rachel Nabors](https://nearestnabors.com/). The [full suite of examples](https://codepen.io/collection/nqNJvD) are available on CodePen; here we present the ones relevant for our docs.

## Writing CSS Animations with the Web Animations API

One of the more familiar ways to approach learning the Web Animations API is to start with something most web developers have played with before: CSS Animations. CSS Animations have a familiar syntax that breaks down nicely for demonstration purposes.

### The CSS version

Here's a tumbling animation written in CSS showing Alice falling down the rabbit hole that leads to Wonderland:

{{EmbedLiveSample("animations_css_version", "", 300)}}

```html hidden live-sample___animations_css_version live-sample___animations_api_version
<div class="wrapper">
  <div id="tunnel"></div>
  <div id="alice">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <path
        d="M110.1 2.7h8.9c3.4.4 6.7.8 10.1 1.3 9.8 1.5 17.8 6.4 24.5 13.7.4.5 1.9.6 2.5.3 6.8-4.4 13.9-8.2 21.9-9.9 1.3-.3 3.4-1.2 3.7 1.5.6 4.9 1.4 9.9 1.7 14.8.3 4.4.1 8.7.1 12.2 2.1 1.5 4.6 2.3 5.5 4 4.2 8.4 3.2 17.6 3.1 26.6 0 1.2-.4 3.3.1 3.6 10.3 4.9 20.7 9.6 31.1 14.4 2.5-4.9-2.3-16-15.8-14.4.6-.5 1.4-1.1 2.2-1.1 2.5.1 4.9.4 7.4.7 6 .8 10.9 3.7 14.6 8.4 1.2 1.5 1.6 4.2 1.1 6.1-.7 3.2-3.7 4-7.1 4.1 4.5 3.5 6.5 8.1 6.8 13.3.6 9.4-1.1 18.6-4.8 27.1-3.9 8.8-5.2 17.5-3.3 26.8.6 3.2 1.2 7 .2 9.9-2 6.2-7.8 8.6-13.4 10.9-3 1.2-7.4 1.2-6.3 6.3.8 3.7-.4 4 .2 4.5 5.8 5.8 11.8 11.5 17.6 17.3 1.7 1.7 3 3.8 4.3 5.5-1.1.4-1.8.7-2.4 1 7.5 5.8 14.9 11.6 22.4 17.4 4.3-4.3 8.6-9 13.3-13.2 8.1-7.3 16.7-14 24.5-21.7 3.3-3.3 4.9-8.2 7.4-12.3.3-.4 1.3-.9 1.6-.7 4.6 2.7 6.8 7.2 7.9 12.1 1.3 5.7 1.6 11.6 2.3 17.1 4.2-.2 8.8-.8 13.4-.4 2 .1 4.6 1.8 5.5 3.5 2.2 4.3 3.8 8.9 5.3 13.5 3.7 11.5 6.9 23.2 10.7 34.7 1.7 5.1 3.4 10.4 8.6 13.4.5.3.5 2.7 0 3.1-3.3 2.5-6.9 4.6-10.5 7 2 5.8 4.3 12.6 6.7 19.6.7-.8 1.4-1.6 2.1-2.3 1.9-1.9 3.5-1.6 4.2 1.2.7 3 1.3 6.2 1.5 9.3.3 7.3.4 14.6.6 21.9 0 .4.2.8.5 1.2 3.6 4.7 7.1 9.3 10.7 14 1.7 2.3 3 5.4 5.3 6.6 5.5 2.7 11.5 4.4 17.3 6.6v.7c-.4.3-.7.8-1.2 1-5.8 2.1-11.6 4.3-17.5 6.2-4.2 1.3-8.4 2-12.4-1.2-1.8-1.5-3.9-2.6-5.8-3.8 0 2.3.1 4.4-.1 6.4-.1.8-.7 2.2-1.2 2.2-2.6.2-5.3.1-7.9.1-1.1 0-2.7.3-3.2-.3-1-1.2-2.1-2.9-2.1-4.4-.1-5.2.1-10.4.3-15.6.1-1.8 1.5-3.9.9-5.4-1.7-4.3-4-8.4-6.1-12.5-2.4-4.6-6.4-9.1-1.2-14.3.3-.3.3-1.3 0-1.7-4.7-6.5-9.5-13.1-14.4-19.5-1.2-1.5-2.9-3.7-4.4-3.7-6.7.1-13.4.8-20.1 1.3-.7.1-1.6.2-1.9.6-7.1 9.1-14 18.3-21.1 27.4-1.3 1.7-2.9 3.4-4.3 5 1.7.6 3.3 1.1 4.8 1.7.6.2 1.3.5 1.6 1 .2.3-.1 1.1-.4 1.5-2 2.6-4.1 5.2-6.1 7.8-4.3 5.3-8.7 10.5-13 15.9-.8 1-1.5 2.4-1.6 3.6-.2 5.4-.1 10.7-.1 16.1 0 1.5-.7 3.6.1 4.5 2.4 3 5.3 5.5 7.9 8.2 1.6 1.7 3 3.5 4.6 5.5-2.6.2-4.5.3-6.4.4h-3.7c-4.8-1.4-9.8-2.5-14.5-4.3-3.5-1.4-7.8-2.5-8-7.7-.1-2.1-.2-4.3-.4-6.7-1 1.1-1.7 2.1-2.6 2.9-.3.3-1 .4-1.3.2-1.9-1.1-3.7-2.2-5.5-3.4-1.7-1.1-4.5-1.6-3.5-4.5 2.3-6.5 6.4-11.6 12.7-14.9.6-.3 1.3-.9 1.6-1.5 3.9-8.2 7.8-16.4 11.8-24.6.7-1.5.4-4.5 3.8-3.8.2.1 1.2-3.1 1.8-4.9-2.8 1.5-5 2.9-7.4 3.9-7.4 3-14.7 6.4-23.1 5.6-8.5-.7-16.2-3.4-23.2-8-9.9-6.7-14.2-17-17.5-27.9-.5-1.7-.5-5.1-3.5-1.6-.1.2-.4.2-.6.3-2.5 1.7-5.4 3-6 6.5-.4 2.3-1 4.6-1.5 7-2.9 13.2-4.2 26.4-2.5 39.9 1.7 13.1 9.2 21.3 21 26.3 2.4 1 4.9 1.9 7.5 2.9-2.1.9-3.9 1.9-5.8 2.3-10.2 2.5-20.5 4.9-30.8 7.1-1.9.4-4.9.7-5.9-.3-6.4-6.5-8.9-14.8-8.3-23.7.7-9.6 2.1-19.2 3.9-28.6 2.2-11.5 6.1-22.5 11.7-32.9.7-1.3 2-3.1 1.6-4.1-1.8-4.6-4.5-8.9-6.2-13.6-2-5.7-4.2-11.6-1.2-17.8.1-.1-.3-.5-.5-.8 7.6.7 12.8 5.3 17.7 10.2-1.3-8.5-2.6-17.2-3.9-25.8 0-.3-.2-.7-.4-.9-6.7-5.5-13.3-11.2-17-19.2-2.6-5.7-4.3-11.8-6.3-17.7-.6-1.6.2-3.4-2.2-4.8-5.9-3.5-10.3-8.6-10.3-16 0-1.8 1.2-5 2.2-5.1 8.3-1.2 16.4-.1 23.8 4.2 2.4 1.4 4.9 2.7 8.1 4.4-.4-8.8-.8-16.2-1.2-23.6-4.2.9-8.6.9-11.5-2-3.3-3.3-5.4-7.8-7.9-11.8-1.1-1.7-2-3.6-3.5-6.4-3.8 10.3-7.4 19.9-10.8 29.1-.3-.6-1.1-1.7-1.5-2.9-3.5-10-2.8-20.2-1.1-30.3 1.2-7.4 4.3-14.6 3.1-22.4-.2-1.1.2-2.3.3-3.4-22.1 17.6-38.8 38.4-42.9 67.4-4 28-2.8 54.8 13.5 79.1-36.3-13.8-53-48.6-58.3-84.1-3 8-15 16.3-22.4 16.6v-.2c2.1-2.9 11.1-10.6 7-30.2-1.3-10.7-4.1-21.2-5.1-31.9-1-10.9-1-21.9-.5-32.9.3-11.6 3.8-22.7 8.6-33.2 5.7-12.5 13.5-23.8 23-33.6 5.6-5.8 11.9-11 18.2-16.1 8.6-6.8 17.7-12.9 28.2-16.5 5.1-1.9 10.4-3 15.7-4.5zm96.4 221.9c-.4.9-1.2 2-1.1 3 .5 7.6 1.2 15.2 2 22.7.2 2.1 0 4.8 3.3 5.5 3.3.7 6.6 1.8 9.9 2.6.3.1.9-.1 1.1-.4 3.8-4.8 7.5-9.6 10.9-14-8.4-6.1-17.1-12.6-26.1-19.4zm-23.1-42.5v6.3c1.9-2 3.6-3.9 5.3-5.7-1.7-.2-3.5-.4-5.3-.6z" />
    </svg>
  </div>
</div>
```

Notice that the background moves, Alice spins, and her color changes at an offset from her spinning. We're going to focus on just Alice for this tutorial. You can check the full source code by clicking "Play" on the code block. Here's the simplified CSS that controls Alice's animation:

```css live-sample___animations_css_version
#alice {
  animation: alice-tumbling infinite 3s linear;
}

@keyframes alice-tumbling {
  0% {
    color: black;
    transform: rotate(0) translate3d(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: black;
    transform: rotate(360deg) translate3d(-50%, -50%, 0);
  }
}
```

```css hidden live-sample___animations_css_version
#tunnel {
  animation: tunnel-fly 1s linear infinite;
}

@keyframes tunnel-fly {
  100% {
    transform: translate3d(0, -300px, 0);
  }
}
```

```css hidden live-sample___animations_css_version live-sample___animations_api_version
#alice {
  color: #431236;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform: rotate(0) translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  will-change: transform, color;
}

path {
  fill: currentColor;
}

#tunnel {
  background:
    url("/shared-assets/images/examples/web-animations/bg-tunnel-border-left.svg")
      repeat-y,
    url("/shared-assets/images/examples/web-animations/bg-tunnel-border-right.svg")
      repeat-y 100% 100%,
    url("/shared-assets/images/examples/web-animations/bg-tunnel-specks.png"),
    #6c373f;
  margin: 0 auto;
  height: calc(100% + 300px);
  width: 60%;
  min-width: 400px;
  backface-visibility: hidden;
  will-change: transform;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background: black;
}

html,
body {
  height: 100%;
}
```

This changes Alice's color and her transform's rotation over 3 seconds at a constant (linear) rate and loops infinitely. In the {{cssxref("@keyframes")}} block we can see that 30% of the way through each loop (about .9 seconds in), Alice's color changes from black to a deep burgundy then back again by the end of the loop.

### Moving it to JavaScript

Now let's try creating the same animation with the Web Animations API.

#### Representing keyframes

The first thing we need is to create a [Keyframe Object](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) corresponding to our CSS {{cssxref("@keyframes")}} block:

```js live-sample___animations_api_version
const aliceTumbling = [
  { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
];
```

Here we're using an array containing multiple objects. Each object represents a key from the original CSS. However, unlike CSS, the Web Animations API doesn't need to explicitly be told the percentages along the animation for each key to appear at. It will automatically divide the animation into equal parts based on the number of keys you give it. This means that a Keyframe object with three keys will play the middle key 50% of the way through each loop of the animation unless told otherwise.

When we want to explicitly set a key's offset from the other keys, we can specify an offset directly in the object, separated from the declaration with a comma. In the above example, to make sure that Alice's color changes at 30% (not 50%) for the color change, we are giving it `offset: 0.3`.

Currently, there should be at least two keyframes specified (representing the starting and ending states of the animation sequence). If your keyframe list has only one entry, {{domxref("Element.animate()")}} may throw a `NotSupportedError` {{domxref("DOMException")}} in some browsers until they are updated.

So to recap, the keys are equally spaced by default unless you specify an offset on a key. Handy, no?

#### Representing timing properties

We'll also need to create an object of timing properties corresponding to the values in Alice's animation:

```js live-sample___animations_api_version
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

You'll notice a few differences here from how equivalent values are represented in CSS:

- For one, the duration is in milliseconds as opposed to seconds — 3000 not 3s. Like {{domxref("Window.setTimeout", "setTimeout()")}} and {{domxref("Window.requestAnimationFrame()")}}, the Web Animations API only takes milliseconds.
- The other thing you'll notice is that it's `iterations`, not `iteration-count`.

> [!NOTE]
> There are a number of small differences between the terminology used in CSS Animations and the terminology used in Web Animations. For instance, Web Animations doesn't use the string `"infinite"`, but instead uses the JavaScript keyword `Infinity`. And instead of `timing-function` we use `easing`. We aren't listing an `easing` value here because, unlike CSS Animations where the default {{cssxref("animation-timing-function")}} is `ease`, in the Web Animations API the default easing is `linear` — which is what we want here.

#### Bring the pieces together

Now it's time to bring them both together with the {{domxref("Element.animate()")}} method:

```js live-sample___animations_api_version
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

And boom: the animation starts playing:

```js hidden live-sample___animations_api_version
document
  .getElementById("tunnel")
  .animate(
    [
      { transform: "translate3d(0, 0, 0)" },
      { transform: "translate3d(0, -300px, 0)" },
    ],
    {
      duration: 1000,
      iterations: Infinity,
    },
  );
```

{{EmbedLiveSample("animations_api_version", "", 300)}}

The `animate()` method can be called on any DOM element that could be animated with CSS. And it can be written in several ways. Instead of making objects for keyframes and timing properties, we could just pass their values in directly, like so:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  },
);
```

What's more, if we only wanted to specify the duration of the animation and not its iterations (by default, animations iterate once), we could pass in the milliseconds alone:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
  ],
  3000,
);
```

## Controlling playback with play(), pause(), reverse(), and updatePlaybackRate()

While we can write CSS Animations with the Web Animations API, where the API really comes in handy is manipulating the animation's playback. The Web Animations API provides several useful methods for controlling playback. Let's take a look at pausing and playing animations in the Follow the White Rabbit example:

In this example, the white rabbit has an animation that causes it to go down a rabbit hole. It's only triggered when the user clicks on it.

```html hidden live-sample___follow_the_white_rabbit
<div class="wrapper">
  <div class="page">
    <div class="background"></div>
    <div id="rabbit">Click the rabbit's ears!</div>
    <div class="foreground"></div>
    <p>
      She was just in time to see him pop down a hole between a great tree's
      roots.
    </p>
  </div>
</div>
```

```css hidden live-sample___follow_the_white_rabbit
#rabbit {
  background: url("/shared-assets/images/examples/web-animations/park5_rabbit.png")
    0 0 / 100% 100%;
  cursor: pointer;
  position: absolute;
  top: 15%;
  left: 60%;
  width: 14.64844%;
  padding-top: 31.00586%;
}

body {
  background: black;
}
.wrapper {
  max-width: 133.33vh;
  margin: 0 auto;
}
.page {
  background: #431236;
  height: 0;
  overflow: hidden;
  padding-top: 75%;
  position: relative;
  text-indent: 100%;
  white-space: nowrap;
}

.foreground {
  height: 100%;
  background: url("/shared-assets/images/examples/web-animations/bg_park5_2.png")
    no-repeat 100% 100% / 100% auto;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

.background {
  background: url("/shared-assets/images/examples/web-animations/bg_park5_1.png")
    no-repeat 0 0 / 100% auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
```

### Pausing and playing animations

We can animate the rabbit using the `animate()` method as usual:

```js live-sample___follow_the_white_rabbit
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownAnimation = whiteRabbit.animate(
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);
```

The {{domxref("Element.animate()")}} method will immediately run after it is called. To prevent the cake from eating itself up before the user has had the chance to click on it, we call {{domxref("Animation.pause()")}} on it immediately after it is defined, like so:

```js live-sample___follow_the_white_rabbit
rabbitDownAnimation.pause();
```

> [!NOTE]
> Alternatively, you can define `rabbitDownAnimation` using the {{domxref("Animation/Animation", "Animation()")}} constructor instead, which doesn't start playing until you call `play()`.

We can now use the {{domxref("Animation.play()")}} method to run it whenever we're ready. Specifically, we want to link it to a clicking action. We can achieve this via the following:

```js live-sample___follow_the_white_rabbit
whiteRabbit.addEventListener("click", downHeGoes);
whiteRabbit.addEventListener("touchstart", downHeGoes);

function downHeGoes(event) {
  whiteRabbit.removeEventListener("click", downHeGoes);
  whiteRabbit.removeEventListener("touchstart", downHeGoes);

  rabbitDownAnimation.play();
}
```

When a user clicks or presses their finger on the rabbit, we can now call `downHeGoes` to make all the animations play.

{{EmbedLiveSample("follow_the_white_rabbit", "", 400)}}

### Other useful methods

In addition to pausing and playing, we can use the following Animation methods:

- {{domxref("Animation.finish()")}} skips to the end of the animation.
- {{domxref("Animation.cancel()")}} aborts the animation and removes its effects.
- {{domxref("Animation.reverse()")}} sets the animation's playback rate ({{domxref("Animation.playbackRate")}}) to a negative value so it runs backward.

Let's take a look at `playbackRate` first — a negative `playbackRate` will cause an animation to run in reverse.
In [Through the Looking-Glass](https://en.wikipedia.org/wiki/Through_the_Looking-Glass), Alice travels to a world where she must run to stay in place — and run twice as fast to move forward! In the Red Queen's Race example, Alice and the Red Queen are running to stay in place:

```html hidden live-sample___red_queen_race
<div class="wrapper">
  <div class="sky"></div>
  <div class="earth">
    <div id="red-queen-and-alice">
      <img
        id="red-queen-and-alice-sprite"
        src="/shared-assets/images/examples/web-animations/sprite_running-alice-queen_small.png"
        srcset="
          /shared-assets/images/examples/web-animations/sprite_running-alice-queen.png 2x
        "
        alt="Alice and the Red Queen running to stay in place." />
    </div>
  </div>
  <div class="scenery" id="foreground1">
    <img
      id="palm3"
      src="/shared-assets/images/examples/web-animations/palm3_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm3.png 2x"
      alt="" />
  </div>
  <div class="scenery" id="foreground2">
    <img
      id="bush"
      src="/shared-assets/images/examples/web-animations/bush_small.png"
      srcset="/shared-assets/images/examples/web-animations/bush.png 2x"
      alt="" />
    <img
      id="w_rook_upright"
      src="/shared-assets/images/examples/web-animations/w_rook_upright_small.png"
      srcset="
        /shared-assets/images/examples/web-animations/w_rook_upright.png 2x
      "
      alt="" />
  </div>
  <div class="scenery" id="background1">
    <img
      id="r_pawn_upright"
      src="/shared-assets/images/examples/web-animations/r_pawn_upright_small.png"
      srcset="
        /shared-assets/images/examples/web-animations/r_pawn_upright.png 2x
      "
      alt="" />
    <img
      id="w_rook"
      src="/shared-assets/images/examples/web-animations/w_rook_small.png"
      srcset="/shared-assets/images/examples/web-animations/w_rook.png 2x"
      alt="" />
    <img
      id="palm1"
      src="/shared-assets/images/examples/web-animations/palm1_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm1.png 2x"
      alt="" />
  </div>
  <div class="scenery" id="background2">
    <img
      id="r_pawn"
      src="/shared-assets/images/examples/web-animations/r_pawn_small.png"
      srcset="/shared-assets/images/examples/web-animations/r_pawn.png 2x"
      alt="" />

    <img
      id="r_knight"
      src="/shared-assets/images/examples/web-animations/r_knight_small.png"
      srcset="/shared-assets/images/examples/web-animations/r_knight.png 2x"
      alt="" />
    <img
      id="palm2"
      src="/shared-assets/images/examples/web-animations/palm2_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm2.png 2x"
      alt="" />
  </div>
</div>
```

```css hidden live-sample___red_queen_race
* {
  user-select: none;
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scenery {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
}

#foreground1,
#foreground2 {
  z-index: 1;
}

#foreground2,
#background2 {
  transform: translateX(100%);
}

#palm3 {
  top: 0;
  left: 10%;
}

#w_rook_upright {
  top: 30%;
  left: 75%;
}

#r_pawn {
  top: 10%;
  left: 15%;
}

#w_rook {
  top: 10%;
  left: 80%;
}

#r_pawn_upright {
  top: 5%;
  left: 30%;
}

#r_knight {
  top: 0;
  left: 70%;
}

#palm2 {
  top: -15%;
  left: 90%;
}

#palm1 {
  top: -15%;
  left: 40%;
}

#bush {
  top: 55%;
  left: 20%;
}

#red-queen-and-alice {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 80%;
  max-width: 450px; /*height: 783px / 2*/
  z-index: 1;
}

#red-queen-and-alice::before {
  content: " ";
  display: block;
  padding-top: 87%;
}

#red-queen-and-alice img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.sky,
.earth {
  position: absolute;
  left: 0;
  height: 50vh;
  width: 100%;
}

.earth {
  background: #eb125d
    url("/shared-assets/images/examples/web-animations/bg_earth.jpg") repeat-x 0
    0 / 100% auto;
  bottom: 0;
}

.sky {
  background: #246e89
    url("/shared-assets/images/examples/web-animations/bg_sky.jpg") repeat-x
    100% 100% / auto 100%;
  top: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
```

```js hidden live-sample___red_queen_race
const background1 = document.getElementById("background1");
const background2 = document.getElementById("background2");

const foreground1 = document.getElementById("foreground1");
const foreground2 = document.getElementById("foreground2");

const redQueenAliceSprite = document.getElementById(
  "red-queen-and-alice-sprite",
);

/* Background animations */
const sceneryFrames = [
  { transform: "translateX(100%)" },
  { transform: "translateX(-100%)" },
];

const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity,
};

const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity,
};

const background1Movement = background1.animate(
  sceneryFrames,
  sceneryTimingBackground,
);
background1Movement.currentTime =
  background1Movement.effect.getComputedTiming().duration / 2;

const background2Movement = background2.animate(
  sceneryFrames,
  sceneryTimingBackground,
);

const foreground1Movement = foreground1.animate(
  sceneryFrames,
  sceneryTimingForeground,
);
foreground1Movement.currentTime =
  foreground1Movement.effect.getComputedTiming().duration / 2;

const foreground2Movement = foreground2.animate(
  sceneryFrames,
  sceneryTimingForeground,
);

const spriteFrames = [
  { transform: "translateY(0)" },
  { transform: "translateY(-100%)" },
];

const redQueenAlice = redQueenAliceSprite.animate(spriteFrames, {
  easing: "steps(7, end)",
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity,
});
```

{{EmbedLiveSample("red_queen_race", "", 400)}}

Because small children tire out easily, unlike automaton chess pieces, Alice is constantly slowing down. We can do this by setting a decay on her animation's `playbackRate`. We use `updatePlaybackRate()` instead of setting the `playbackRate` directly since that produces a smooth update:

```js live-sample___red_queen_race
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueenAlice.playbackRate > 0.4) {
    redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 0.9);
  }
  adjustBackgroundPlayback();
}, 1000);
```

But urging them on by clicking or tapping causes them to speed up by multiplying their `playbackRate`:

```js live-sample___red_queen_race
function goFaster() {
  // But you can speed them up by giving the screen a click or a tap.
  redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 1.1);
  adjustBackgroundPlayback();
}

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

The background elements also have `playbackRate`s that are impacted when you click or tap. Their playback rates are derived from Alice's, shown below. What happens when you make Alice and the Red Queen run twice as fast? What happens when you let them slow down?

```js live-sample___red_queen_race
/* Alice tires so easily! 
  Every so many seconds, reduce their playback rate so they slow a little. 
*/
const sceneries = [
  foreground1Movement,
  foreground2Movement,
  background1Movement,
  background2Movement,
];

function adjustBackgroundPlayback() {
  // If Alice and the Red Queen are running at a speed of 0.8–1.2,
  // the background doesn't move.
  // But if they fall under 0.8, the background slides backwards
  if (redQueenAlice.playbackRate < 0.8) {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(-redQueenAlice.playbackRate / 2);
    });
  } else if (redQueenAlice.playbackRate > 1.2) {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(redQueenAlice.playbackRate / 2);
    });
  } else {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(0);
    });
  }
}
adjustBackgroundPlayback();
```

## Persisting animation styles

When animating elements, a common use case is to persist the final state of the animation, after the animation has finished. One method sometimes used for this is to set the animation's [fill mode](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) to `forwards`. However, it is not recommended to use fill modes to persist the effect of an animation indefinitely, for two reasons:

- The browser has to maintain the state of the animation while it is still active, so the animation continues to consume resources even though it is no longer animating. Note that this is somewhat alleviated by the browser [automatically removing filling animations](#automatically_removing_filling_animations).
- Styles applied by animations have a [higher precedence in the cascade](/en-US/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) than specified styles, so it can be difficult to override them when needed.

A better approach is to use the {{domxref("Animation.commitStyles()")}} method. This writes the computed values of the animation's current styles into its target element's [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) attribute, after which the element can be restyled normally.

## Automatically removing filling animations

It is possible to trigger a large number of animations on the same element. If they are indefinite (i.e., forwards-filling), this can result in a huge animations list, which could create a memory leak. For this reason, browsers automatically remove filling animations after they are replaced by newer animations, unless the developer explicitly specifies to keep them.

Animations are removed when all of the following are true:

- The animation is filling (its `fill` is `forwards` if it is playing forwards, `backwards` if it is playing backwards, or `both`).
- The animation is finished. (Note that because of the `fill` it will still be in effect.)
- The animation's timeline is monotonically increasing. (This is always true for {{domxref("DocumentTimeline")}}; other timelines such as {{cssxref("scroll-timeline")}} can run backwards.)
- The animation is not being controlled by declarative markup such as CSS.
- Every styling effect of the animation's {{domxref("AnimationEffect")}} is being overridden by another animation that also satisfies all the conditions above. (Typically, when two animations would set the same style property of the same element, the one created last overrides the other.)

The first four conditions ensure that, without intervention by JavaScript code, the animation's effect will never change or end. The last condition ensures that the animation will never actually affect the style of any element: it has been entirely replaced.

When the animation is automatically removed, the animation's {{domxref("Animation/remove_event", "remove")}} event fires.

To prevent the browser from automatically removing animations, call the animation's {{domxref("Animation.persist", "persist()")}} method.

The animation's {{domxref("Animation.replaceState", "replaceState")}} property will be `removed` if the animation has been removed, `persisted` if you have called {{domxref("Animation.persist", "persist()")}} on the animation, or `active` otherwise.

## Getting information out of animations

Imagine other ways we could use playbackRate, such as improving accessibility for users with vestibular disorders by letting them slow down animations across an entire site. That's impossible to do with CSS without recalculating durations in every CSS rule, but with the Web Animations API, we could use the {{domxref("Document.getAnimations")}} method to loop over each animation on the page and halve their `playbackRate`s, like so:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

With the Web Animations API, all you need to change is just one little property!

Another thing that's tough to do with CSS Animations alone is creating dependencies on values provided by other animations. For instance, in the Growing and Shrinking Alice game example, you might have noticed something odd about the cake's duration:

```js
document.getElementById("eat-me-sprite").animate([], {
  duration: aliceChange.effect.getComputedTiming().duration / 2,
});
```

To understand what's happening here, let's take a look at Alice's animation:

```js
const aliceChange = document
  .getElementById("alice")
  .animate(
    [
      { transform: "translate(-50%, -50%) scale(.5)" },
      { transform: "translate(-50%, -50%) scale(2)" },
    ],
    {
      duration: 8000,
      easing: "ease-in-out",
      fill: "both",
    },
  );
```

Alice's animation has her going from half her size to twice her size over 8 seconds. Then we pause her:

```js
aliceChange.pause();
```

If we had left her paused at the beginning of her animation, she'd start at half her full size, as if she'd drunk the entire bottle already! We want to set her animation's "playhead" in the middle, so she's already halfway done. We could do that by setting her {{domxref("Animation.currentTime")}} to 4 seconds, like so:

```js
aliceChange.currentTime = 4000;
```

But while working on this animation, we might change Alice's duration a lot. Wouldn't it be better if we set her `currentTime` dynamically, so we don't have to make two updates at a time? We can, in fact, do so by referencing aliceChange's {{domxref("Animation.effect")}} property, which returns an object containing all the details of the effect(s) active on Alice:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` lets us access the animation's keyframes and timing properties — `aliceChange.effect.getComputedTiming()` points to Alice's timing object — this contains her {{domxref("KeyframeEffect.KeyframeEffect", "duration")}}. We can divide her duration in half to get the midpoint for her animation's timeline, setting her to be normal height. Now we can reverse and play her animation in either direction to make her grow smaller or larger!

And we can do the same thing when setting the cake and bottle durations:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Now all three animations are linked to just one duration, which we can change easily from one place.

We can also use the Web Animations API to figure out the animation's current time. The game ends when you run out of cake to eat or empty the bottle. Which vignette players are presented with depends on how far along Alice was in her animation, whether she grew too big and can't get in the tiny door anymore or too small and cannot reach the key to open the door. We can figure out whether she's on the large end or small end of her animation by getting her animation's {{domxref("Animation.currentTime", "currentTime")}} and dividing it by her `activeDuration`:

```js
const endGame = () => {
  // get Alice's timeline's playhead location
  const alicePlayhead = aliceChange.currentTime;
  const aliceTimeline = aliceChange.effect.getComputedTiming().activeDuration;

  // stops Alice's and other animations
  stopPlayingAlice();

  // depending on which third it falls into
  const aliceHeight = alicePlayhead / aliceTimeline;

  if (aliceHeight <= 0.333) {
    // Alice got smaller!
    // …
  } else if (aliceHeight >= 0.666) {
    // Alice got bigger!
    // …
  } else {
    // Alice didn't change significantly
    // …
  }
};
```

## Callbacks and promises

CSS Animations and Transitions have their own event listeners, and these are also possible with the Web Animations API:

- {{domxref("Animation/finish_event", "onfinish")}} is the event handler for the `finish` event and can be triggered manually with {{domxref("Animation/finish", "finish()")}}.
- {{domxref("Animation/cancel_event", "oncancel")}} is the event handler for the `cancel` event and can be triggers with {{domxref("Animation.cancel", "cancel()")}}.

Here we set the callbacks for the cake, bottle, and Alice to fire the `endGame` function:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Better still, the Web Animations API also provides a {{domxref("Animation.finished", "finished")}} promise that will resolve when the animation finishes, or reject if it is canceled.

## Conclusion

These are the basic features of the Web Animations API. By now you should be ready to "jump down the rabbit hole" of animating in the browser and ready to write your own animation experiments!

## See also

- The [full suite of Alice in Wonderland demos](https://codepen.io/collection/nqNJvD) on CodePen for you to play with, fork, and share.
- [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) Explains the background of the Web Animations API and why it is more performant than other web animation methods.
