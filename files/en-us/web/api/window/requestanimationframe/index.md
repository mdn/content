---
title: "Window: requestAnimationFrame() method"
short-title: requestAnimationFrame()
slug: Web/API/window/requestAnimationFrame
page-type: web-api-instance-method
browser-compat: api.Window.requestAnimationFrame
---

{{APIRef}}

The **`window.requestAnimationFrame()`** method tells the
browser that you wish to perform an animation. It requests the browser to call a
user-supplied callback function prior to the next repaint.

The frequency of calls to the callback function will generally match the display
refresh rate. The most common refresh rate is 60hz,
(60 cycles/frames per second), though 75hz, 120hz, and 144hz are also widely used.
`requestAnimationFrame()` calls are paused in most browsers when running in
background tabs or hidden {{ HTMLElement("iframe") }}s, in order to improve
performance and battery life.

> **Note:** Your callback function must call `requestAnimationFrame()` again if
> you want to animate another frame. `requestAnimationFrame()` is one-shot.

> **Warning:** Be sure to always use the first argument (or some other method for
> getting the current time) to calculate how much the animation will progress in
> a frame — **otherwise the animation will run faster on high refresh-rate screens**.
> For ways to do that, see the examples below.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameters

- `callback`
  - The function to call when it's time to update your animation for the next
    repaint. This callback function is passed a single argument: a
    {{domxref("DOMHighResTimeStamp")}} indicating the end time of the previous frame's
    rendering (based on the number of milliseconds since
    [time origin](/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin)).
  - The timestamp is a decimal number, in milliseconds, but with a minimal
    precision of 1 millisecond. For `Window` objects (not `Workers`), it is equal to
    {{domxref("document.timeline.currentTime")}}. This timestamp is shared
    between all windows that run on the same agent (that is, all same-origin windows,
    and more importantly same-origin iframes) — which allows synchronizing
    animations across multiple `requestAnimationFrame` callbacks. The timestamp
    value is also similar to calling {{domxref('performance.now()')}} at the start
    of the callback function, but it is never the same value.
  - When multiple callbacks queued by `requestAnimationFrame()` begin to fire in
    a single frame, each receives the same timestamp even though time has passed
    during the computation of every previous callback's workload.

### Return value

A `long` integer value, the request id, that uniquely identifies the entry
in the callback list. This is a non-zero value, but you may not make any other
assumptions about its value. You can pass this value to
{{domxref("window.cancelAnimationFrame()")}} to cancel the refresh callback request.

## Examples

In this example, an element is animated for 2 seconds (2000 milliseconds). The element
moves at a speed of 0.1px/ms to the right, so its relative position (in CSS pixels) can
be calculated in function of the time elapsed since the start of the animation (in
milliseconds) with `0.1 * elapsed`. The element's final position is 200px
(`0.1 * 2000`) to the right of its initial position.

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start, previousTimeStamp;
let done = false;

function step(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (previousTimeStamp !== timeStamp) {
    // Math.min() is used here to make sure the element stops at exactly 200px
    const count = Math.min(0.1 * elapsed, 200);
    element.style.transform = `translateX(${count}px)`;
    if (count === 200) done = true;
  }

  if (elapsed < 2000) {
    // Stop the animation after 2 seconds
    previousTimeStamp = timeStamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}

window.requestAnimationFrame(step);
```

These next three examples illustrate different approaches to setting the zero point in time,
the baseline for calculating the progress of your animation in each frame. If you
want to synchronize to an external clock, such as {{domxref("BaseAudioContext.currentTime")}},
the highest precision available is the duration of a single frame, 16.67ms @60hz. The
callback's timestamp argument represents the end of the previous frame, so the soonest
your newly calculated value(s) will be rendered is the next frame.

This example waits until the first callback executes to set `zero`. If your animation
jumps to a new value when it starts, you must structure it this way. If you have no need to
synchronize to anything external, such as audio, then this approach is recommended because
some browsers have a multi-frame delay between the initial call to `requestAnimationFrame()`
and the first call to the callback function.

```js
let zero;
requestAnimationFrame(firstFrame);
function firstFrame(timeStamp) {
  zero = timeStamp;
  animate(timeStamp);
}
function animate(timeStamp) {
  const value = (timeStamp - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

This example uses {{domxref("document.timeline.currentTime")}} to set a zero value
prior to the first call to `requestAnimationFrame`. {{domxref("document.timeline.currentTime")}}
aligns with the timeStamp argument, so the zero value is equivalent to the
0th frame's timestamp.

```js
const zero = document.timeline.currentTime;
requestAnimationFrame(animate);
function animate(timeStamp) {
  const value = (timeStamp - zero) / duration; // animation-timing-function: linear
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

This example animates using {{domxref("performance.now()")}} instead of the callback's
timestamp value. You might use this if you want to achieve slightly higher synchronization
precision, though the extra degree of precision is variable and not much of an increase.
Note: This example does not allow you to reliably synchronize animation callbacks.

```js
const zero = performance.now();
requestAnimationFrame(animate);
function animate() {
  const value = (performance.now() - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.cancelAnimationFrame()")}}
- {{domxref("OffscreenCanvas")}}
- [DedicatedWorkerGlobalScope](/en-US/docs/Web/API/DedicatedWorkerGlobalScope)
- [requestAnimationFrame for smart animating](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/) - Blog post
- [Animating with JavaScript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog post
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](https://www.testufo.com/#test=animation-time-graph)
