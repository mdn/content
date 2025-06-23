---
title: "Window: requestAnimationFrame() method"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
page-type: web-api-instance-method
browser-compat: api.Window.requestAnimationFrame
---

{{APIRef}}

The **`window.requestAnimationFrame()`** method tells the
browser you wish to perform an animation. It requests the browser to call a
user-supplied callback function before the next repaint.

The frequency of calls to the callback function will generally match the display
refresh rate. The most common refresh rate is 60hz,
(60 cycles/frames per second), though 75hz, 120hz, and 144hz are also widely used.
`requestAnimationFrame()` calls are paused in most browsers when running in
background tabs or hidden {{ HTMLElement("iframe") }}s, in order to improve
performance and battery life.

> [!NOTE]
> Your callback function must call `requestAnimationFrame()` again if
> you want to animate another frame. `requestAnimationFrame()` is one-shot.

> [!WARNING]
> Be sure always to use the first argument (or some other method for
> getting the current time) to calculate how much the animation will progress in
> a frame — **otherwise, the animation will run faster on high refresh-rate screens**.
> For ways to do that, see the examples below.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameters

- `callback`

  - : The function to call when it's time to update your animation for the next repaint. This callback function is passed a single argument:

    - `timestamp`

      - : A {{domxref("DOMHighResTimeStamp")}} indicating the end time of the previous frame's rendering (based on the number of milliseconds since [time origin](/en-US/docs/Web/API/Performance/timeOrigin)). The timestamp is a decimal number, in milliseconds, but with a minimal precision of 1 millisecond. For `Window` objects (not `Workers`), it is equal to {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}}. This timestamp is shared between all windows that run on the same agent (all same-origin windows and, more importantly, same-origin iframes) — which allows synchronizing animations across multiple `requestAnimationFrame` callbacks. The timestamp value is also similar to calling {{domxref('performance.now()')}} at the start of the callback function, but it is never the same value.

        When multiple callbacks queued by `requestAnimationFrame()` begin to fire in a single frame, each receives the same timestamp even though time has passed during the computation of every previous callback's workload.

### Return value

An `unsigned long` integer value, the request ID, that uniquely identifies the entry
in the callback list. You should not make any assumptions about its value. You can pass this value to
{{domxref("window.cancelAnimationFrame()")}} to cancel the refresh callback request.

> [!WARNING]
> The request ID is typically implemented as a per-window incrementing counter. Therefore, even when it starts counting at 1, it may overflow and end up reaching 0.
> While unlikely to cause issues for short-lived applications, you should avoid `0` as a sentinel value for invalid request identifier IDs and instead prefer unattainable values such as `null`.
> The spec doesn't specify the overflowing behavior, so browsers have divergent behaviors. When overflowing, the value would either wrap around to 0, to a negative value, or fail with an error.
> Unless overflow throws, request IDs are also not truly unique because there are only finitely many 32-bit integers for possibly infinitely many callbacks.
> Note that it would however take ~500 days to reach the issue when rendering at 60Hz with 100 calls to `requestAnimationFrame()` per frame.

## Examples

In this example, an element is animated for 2 seconds (2000 milliseconds). The element
moves at a speed of 0.1px/ms to the right, so its relative position (in CSS pixels) can
be calculated in function of the time elapsed since the start of the animation (in
milliseconds) with `0.1 * elapsed`. The element's final position is 200px
(`0.1 * 2000`) to the right of its initial position.

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  // Math.min() is used here to make sure the element stops at exactly 200px
  const shift = Math.min(0.1 * elapsed, 200);
  element.style.transform = `translateX(${shift}px)`;
  if (shift < 200) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
```

The following three examples illustrate different approaches to setting the zero point in time,
the baseline for calculating the progress of your animation in each frame. If you
want to synchronize to an external clock, such as {{domxref("BaseAudioContext.currentTime")}},
the highest precision available is the duration of a single frame, 16.67ms @60hz. The
callback's timestamp argument represents the end of the previous frame, so the soonest
your newly calculated value(s) will be rendered is in the next frame.

This example waits until the first callback executes to set `zero`. If your animation
jumps to a new value when it starts, you must structure it this way. If you do not need to
synchronize to anything external, such as audio, then this approach is recommended because
some browsers have a multi-frame delay between the initial call to `requestAnimationFrame()`
and the first call to the callback function.

```js
let zero;
requestAnimationFrame(firstFrame);
function firstFrame(timestamp) {
  zero = timestamp;
  animate(timestamp);
}
function animate(timestamp) {
  const value = (timestamp - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

This example uses {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}} to set a zero value
before the first call to `requestAnimationFrame`. `document.timeline.currentTime`
aligns with the `timestamp` argument, so the zero value is equivalent to the
0th frame's timestamp.

```js
const zero = document.timeline.currentTime;
requestAnimationFrame(animate);
function animate(timestamp) {
  const value = (timestamp - zero) / duration; // animation-timing-function: linear
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

This example animates using {{domxref("performance.now()")}} instead of the callback's
timestamp value. You might use this to achieve slightly higher synchronization
precision, though the extra degree of precision is variable and not much of an increase.
Note: This example does not allow you to synchronize animation callbacks reliably.

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
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- [Animating with JavaScript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog post
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](https://www.testufo.com/#test=animation-time-graph)
- [Firefox switching to uint32_t for the requestAnimationFrame request ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
