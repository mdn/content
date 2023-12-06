---
title: "Animation: play() method"
short-title: play()
slug: Web/API/Animation/play
page-type: web-api-instance-method
browser-compat: api.Animation.play
---

{{ APIRef("Web Animations") }}

The **`play()`** method of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{ domxref("Animation") }} Interface starts or resumes playing of an animation. If the animation is finished, calling `play()` restarts the animation, playing it from the beginning.

## Syntax

```js-nolint
play()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) example, clicking or tapping the cake causes Alice's growing animation (`aliceChange`) to play forward, causing her to get bigger, as well as triggering the cake's animation. Two `Animation.play()`s, one `EventListener`:

```js
// The cake has its own animation:
const nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );

// Pause the cake's animation so it doesn't play immediately.
nommingCake.pause();

// This function will play when ever a user clicks or taps
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};

// When a user holds their mouse down or taps, call growAlice to make all the animations play.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
- {{domxref("Animation.pause()")}} to pause an animation.
- {{domxref("Animation.reverse()")}} to play an animation backwards.
- {{domxref("Animation.finish()")}} to finish an animation.
- {{domxref("Animation.cancel()")}} to cancel an animation.
