---
title: "Window: requestAnimationFrame() method"
short-title: requestAnimationFrame()
slug: Web/API/window/requestAnimationFrame
page-type: web-api-instance-method
browser-compat: api.Window.requestAnimationFrame
---

{{APIRef}}

The **`window.requestAnimationFrame()`** method tells the
browser that you wish to perform an animation and requests that the browser calls a
specified function to update an animation right before the next repaint. The method takes a
callback as an argument to be invoked before the repaint.

> **Note:** Your callback routine must itself call
> `requestAnimationFrame()` again if you want to animate another frame at the
> next repaint. `requestAnimationFrame()` is 1 shot.

You should call this method whenever you're ready to update your animation onscreen.
This will request that your animation function be called before the browser performs the
next repaint. The number of callbacks is usually 60 times per second, but will generally
match the display refresh rate in most web browsers as per W3C recommendation.
`requestAnimationFrame()` calls are paused in most browsers when running in
background tabs or hidden {{ HTMLElement("iframe") }}s in order to improve performance
and battery life.

The callback method is passed a single argument, a {{domxref("DOMHighResTimeStamp")}},
which indicates the current time (based on the number of milliseconds since [time origin](/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin)). When
multiple callbacks queued by `requestAnimationFrame()` begin to fire in a
single frame, each receives the same timestamp even though time has passed during the
computation of every previous callback's workload (in the code example below we only
animate the frame when the timestamp changes, i.e. on the first callback). This
timestamp is a decimal number, in milliseconds, but with a minimal precision of 1ms
(1000 µs).

> **Warning:** Be sure to always use the first argument (or some other method for getting the
> current time) to calculate how much the animation will progress in a frame,
> **otherwise the animation will run faster on high refresh rate screens**.
> Check the example below for a way to do this.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameters

- `callback`
  - : The function to call when it's time to update your animation for the next repaint.
    The callback function is passed one single argument, a
    {{domxref("DOMHighResTimeStamp")}} identical to the one returned by
    {{domxref('performance.now()')}}, indicating the point in time when
    `requestAnimationFrame()` starts to execute callback functions.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.cancelAnimationFrame()")}}
- {{domxref("OffscreenCanvas")}}
- [DedicatedWorkerGlobalScope](/en-US/docs/Web/API/DedicatedWorkerGlobalScope)
- [mozRequestAnimationFrame](https://robert.ocallahan.org/2010/08/mozrequestanimationframe-frame-rate_17.html) – Blog post
- [requestAnimationFrame for smart animating](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/) - Blog post
- [Animating with JavaScript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog post
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](https://www.testufo.com/#test=animation-time-graph)
- Paul Irish: [requestAnimationFrame API: now with sub-millisecond precision](https://developer.chrome.com/blog/requestanimationframe-api-now-with-sub-millisecond-precision/)
