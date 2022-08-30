---
title: Efficient animation for web games
slug: Games/Techniques/Efficient_animation_for_web_games
tags:
  - Animation
  - Games
  - JavaScript
---

{{GamesSidebar}}

This article covers techniques and advice for creating efficient animation for web games, with a slant towards supporting lower end devices such as mobile phones. We touch on [CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) and [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations), and JavaScript loops involving {{ domxref("window.requestAnimationFrame") }}.

There are several techniques worth knowing that will improve the performance of your game or application whilst also using less battery life, especially on low-end devices. It is worth documenting some of these things, as there is evidence to suggest (in popular and widely-used UI libraries, for example) that they aren't necessarily common knowledge. First off, let us discuss some basic ideas.

## Help the browser help you

If you are using DOM for your UI, which I would certainly recommend, you really ought to use [CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) and/or [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations), rather than JavaScript-powered animations. Though JavaScript animations can be easier to express at times, unless you have a great need to synchronize UI animation state with game animation state, you're unlikely to be able to do a better job than the browser. The reason for this is that CSS transitions/animations are much higher level than JavaScript, and express a very specific intent. Because of this, the browser can make some assumptions that it can't easily make when you're manually tweaking values in JavaScript.

To take a concrete example, if you start a CSS transition to move something from off-screen so that it is fully visible on-screen, the browser knows that the related content will end up completely visible to the user and can then pre-render that content. When you animate position with JavaScript, the browser cannot easily make that same assumption, and so you might end up causing it to draw only the newly-exposed region of content, which may introduce slow-down. There are signals at the beginning and end of animations that allow you to attach JavaScript callbacks and form a rudimentary form of synchronization (though there are no guarantees on how promptly these callbacks will happen).

Speaking of the assumptions that the browser can make, you should avoid causing it to have to re-layout during animations. In this vein, it is worth trying to stick to animating only transform and opacity properties. Though some browsers make some effort for other properties to be animated quickly, these are pretty much the only ones semi-guaranteed to be fast across all browsers. Something to be careful of is that overflow may end up causing re-layout, or other expensive calculations. If you are setting a transform on something that would overlap its container's bounds, you may want to set _overflow: hidden_ on that container for the duration of the animation.

## Use requestAnimationFrame

When you are animating {{ htmlelement("canvas") }} content, or when your DOM animations absolutely must synchronize with canvas content animations, do make sure to use {{ domxref("window.requestAnimationFrame") }}, and not older methods such as {{ domxref("setTimeout()") }}. Assuming you are running in an arbitrary browsing session, you can never really know how long the browser will take to draw a particular frame. `requestAnimationFrame` causes the browser to redraw and call your function before that frame gets to the screen. The downside of using this vs. `setTimeout` is that your animations must be time-based instead of frame-based, i.e. you must keep track of time and set your animation properties based on elapsed time. `requestAnimationFrame` includes a {{ domxref("DOMHighResTimeStamp") }} in its callback function prototype, which you definitely should use (as opposed to using the {{ domxref("Date") }} object), as this will be the time the frame began rendering, and ought to make your animations look more fluid. You may have a callback that ends up looking something like this:

```js
let startTime = -1;
const animationLength = 2000; // Animation length in milliseconds

function doAnimation(timestamp) {
  // Calculate animation progress
  let progress = 0;

  if (startTime < 0) {
    startTime = timestamp;
  } else {
    progress = timestamp - startTime;
  }

  // Perform the animation
  if (progress < animationLength) {
    requestAnimationFrame(doAnimation);
  }
}

// Start animation
requestAnimationFrame(doAnimation);
```

You will note that we set `startTime` to `-1` at the beginning, when we could just as easily have set the time using the `Date()` object and avoided the extra code in the animation callback. We do this so that any setup or processes that happen between the start of the animation and the callback being processed do not affect the start of the animation, and so that all the animations we start before the frame is processed are synchronized.

To save battery life, it is best to only draw when there are things going on, so that would mean calling `requestAnimationFrame` (or your refresh function, which in turn calls that) in response to events happening in your game. Unfortunately, this makes it very easy to end up drawing things multiple times per frame. We would recommend keeping track of when `requestAnimationFrame` has been called and only having a single handler for it. There aren't solid guarantees of what order things will be called in with _requestAnimationFrame_ (though, in our experience, it is in the order in which they were requested), so this also helps cut out any ambiguity. An easy way to do this is to declare your own refresh function that sets a flag when it calls `requestAnimationFrame`. When the callback is executed, you can unset that flag so that calls to that function will request a new frame again, like this:

```js
function redraw() {
  drawPending = false;
  // Perform the drawing
}

let drawPending = false;
function requestRedraw() {
  if (!drawPending) {
    drawPending = true;
    requestAnimationFrame(redraw);
  }
}
```

Following this pattern — or something similar — means that no matter how many times you call _requestRedraw_, your drawing function will only be called once per frame.

Remember that when you do drawing with `requestAnimationFrame` (and in general), you may be blocking the browser from updating other things. Try to keep unnecessary work outside your animation functions. For example, it may make sense for animation setup to happen in a `setTimeout`/clearTimeout callback rather than a `requestAnimationFrame` callback. Though it is possibly overkill for simple games, you may also want to consider using [Web Worker](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) threads. It is worth trying to batch similar operations, and to schedule them at a time when screen updates are unlikely to occur, or when such updates are of a more subtle nature. Modern console games, for example, tend to prioritize frame rate during player movement and combat, but may prioritize image quality or physics detail when compromise to frame rate and input response would be less noticeable.

## Measure performance

There are some popular animation-related libraries and UI toolkits with animation functions that still do things like using `setTimeout` to drive their animations, drive all their animations completely individually, or other similar things that aren't conducive to maintaining a high frame-rate. One of the goals for the [Puzzowl](http://www.teamgiraffe.co.uk/) game is for it to be a solid 60fps on reasonable hardware (for the record, it's almost there on Galaxy Nexus-class hardware) while still being playable on low-end devices (such as a Firefox OS Geeksphone Keon). It would have been good to use as much third party software as possible, but most of what we tried was either too complicated for simple use-cases, or had performance issues on mobile.

How this conclusion was reached, however, is more important than the conclusion itself. To begin with, the priority was to write the code quickly to iterate on gameplay (and we'd certainly recommend doing this). We assumed that our own, naive code was making the game slower than we would like. To an extent, this was true: we found plenty to optimize in our own code, but it got to the point where we knew what we were doing ought to perform quite well, and it still wasn't quite there. At this point, we turned to the Firefox [JavaScript profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), and this told us almost exactly what low-hanging-fruit was left to address to improve performance. As it turned out, the code from some of the things mentioned above; the animation code had some corner cases where redraws were happening several times per frame, and some of the animations caused Firefox to need to redraw everything (they were fine in other browsers, as it happens — that particular issue is now fixed). Some of the third party code we were using was poorly optimized.

## A take-away

To help combat poor animation performance, Chris Lord wrote [Animator.js](https://gitlab.com/Cwiiis/animator-js/blob/master/Animator.js), a simple, easy-to-use animation library, heavily influenced by various parts of [Clutter](https://blogs.gnome.org/clutter/), but with a focus on avoiding scope-creep. It does one thing, and it does it well. Animator.js is a fire-and-forget style animation library, designed to be used with games, or other situations where you need many, synchronized, custom animations. It includes a handful of built-in tweening functions, the facility to add your own, and helper functions for animating object properties. Puzzowl uses it to drive all the drawing updates and transitions, by overriding its `requestAnimationFrame` function with a custom version that makes the request, and appending the game's drawing function onto the end of the callback like so:

```js
animator.requestAnimationFrame = (callback) => {
  requestAnimationFrame((t) => {
    callback(t);
    redraw();
  });
};
```

The game's _redraw_ function does all drawing, and the animation callbacks just update state. When you request a redraw outside of animations, the animator's `activeAnimations` property is queried first to avoid mistakenly drawing multiple times in a single animation frame. This gives nice, synchronized animations at a very low cost. Puzzowl isn't out yet, but here's a little screencast of it running on a Nexus 5:

{{EmbedYouTube("hap4iQTMh70")}}

> **Note:** This article was originally written and published by Chris Lord, on his blog — see [Efficient animation for games on the (mobile) web](https://www.chrislord.net/2013/11/29/efficient-animation-for-games-on-the-mobile-web/).
