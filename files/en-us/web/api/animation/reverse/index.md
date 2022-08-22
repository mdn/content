---
title: Animation.reverse()
slug: Web/API/Animation/reverse
page-type: web-api-instance-method
tags:
  - API
  - Animation
  - Interface
  - Method
  - Reference
  - Web Animations
  - reverse
  - waapi
  - web animations api
browser-compat: api.Animation.reverse
---
{{APIRef("Web Animations")}}

The **`Animation.reverse()`** method of the {{ domxref("Animation") }} Interface reverses the playback direction, meaning the animation ends at its beginning. If called on an unplayed animation, the whole animation is played backwards. If called on a paused animation, the animation will continue in reverse.

## Syntax

```js
reverse()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) example, clicking or tapping the bottle causes Alice's growing animation (`aliceChange`) to play backwards, causing her to get smaller. It is done by setting `aliceChange`'s {{ domxref("Animation.playbackRate") }} to `-1` like so:

```js
const shrinkAlice = () => {
  // play Alice's animation in reverse
  aliceChange.playbackRate = -1;
  aliceChange.play();

  // play the bottle's animation
  drinking.play()
}
```

But it could also have been done by calling `reverse()` on `aliceChange` like so:

```js
const shrinkAlice = () => {
  // play Alice's animation in reverse
  aliceChange.reverse();

  // play the bottle's animation
  drinking.play()
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
- {{domxref("Animation.pause()")}} to pause an animation.
- {{domxref("Animation.play()")}} to move an animation forward.
