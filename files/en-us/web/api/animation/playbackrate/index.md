---
title: "Animation: playbackRate property"
short-title: playbackRate
slug: Web/API/Animation/playbackRate
page-type: web-api-instance-property
browser-compat: api.Animation.playbackRate
---

{{APIRef("Web Animations")}}

The **`Animation.playbackRate`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns or sets the playback rate of the animation.

Animations have a **playback rate** that provides a scaling factor from the rate of change of the animation's {{domxref("DocumentTimeline", "timeline")}} time values to the animation's current time. The playback rate is initially `1`.

## Value

Takes a number that can be 0, negative, or positive. Negative values reverse the animation. The value is a scaling factor, so for example a value of 2 would double the playback rate.

> [!NOTE]
> Setting an animation's `playbackRate` to `0` effectively pauses the animation (however, its {{domxref("Animation.playState", "playState")}} does not necessarily become `paused`).

## Examples

In the [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) example, clicking or tapping the bottle causes Alice's growing animation (`aliceChange`) to reverse, causing her to shrink:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

// On tap or click, Alice will shrink.
bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

Contrariwise, clicking on the cake causes her to "grow," playing `aliceChange` forwards again:

```js
const growAlice = () => {
  aliceChange.playbackRate = 1;
  aliceChange.play();
};

// On tap or click, Alice will grow.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

In another example, the [Red Queen's Race Game](https://codepen.io/rachelnabors/pen/PNGGaV?editors=0010), Alice and the Red Queen are constantly slowing down:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4

  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
}, 3000);
```

But clicking or tapping on them causes them to speed up by multiplying their `playbackRate`:

```js
const goFaster = () => {
  redQueen_alice.playbackRate *= 1.1;
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
