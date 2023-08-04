---
title: "Animation: pause() method"
short-title: pause()
slug: Web/API/Animation/pause
page-type: web-api-instance-method
browser-compat: api.Animation.pause
---

{{ APIRef("Web Animations") }}

The **`pause()`** method of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("Animation")}} interface suspends playback of the animation.

## Syntax

```js-nolint
animation.pause();
```

### Parameters

None.

### Return value

None.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the animation's {{domxref("Animation.currentTime", "currentTime")}} is `unresolved` (perhaps it hasn't started playing yet), and the end time of the animation is positive infinity.

## Example

`Animation.pause()` is used many times in the Alice in Web Animations API Land [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010), largely because animations created with the {{domxref("Element.animate()")}} method immediately start playing and must be paused manually if you want to avoid that:

```js
// animation of the cupcake slowly getting eaten up
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

// doesn't actually need to be eaten until a click event, so pause it initially:
nommingCake.pause();
```

Additionally, when resetting:

```js
// An all-purpose function to pause the animations on Alice, the cupcake, and the bottle that reads "drink me."
const stopPlayingAlice = () => {
  aliceChange.pause();
  nommingCake.pause();
  drinking.pause();
};

// When the user releases the cupcake or the bottle, pause the animations.
cake.addEventListener("mouseup", stopPlayingAlice, false);
bottle.addEventListener("mouseup", stopPlayingAlice, false);
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
