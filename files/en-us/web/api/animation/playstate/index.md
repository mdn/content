---
title: Animation.playState
slug: Web/API/Animation/playState
page-type: web-api-instance-property
tags:
  - API
  - Animation
  - Property
  - Reference
  - Web Animations
  - playState
  - web animations api
browser-compat: api.Animation.playState
---
{{APIRef("Web Animations")}}

The **`Animation.playState`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns and sets an enumerated value describing the playback state of an animation.

> **Note:** This property is read-only for CSS Animations and Transitions.

## Value

- `idle`
  - : The current time of the animation is unresolved and there are no pending tasks.
- `running`
  - : The animation is running.
- `paused`
  - : The animation was suspended and the {{domxref("Animation.currentTime")}} property is not updating.
- `finished`
  - : The animation has reached one of its boundaries and the {{domxref("Animation.currentTime")}} property is not updating.

Previously, Web Animations defined a **`pending`** value to indicate that some asynchronous operation such as initiating playback was yet to complete. This is now indicated by the separate {{domxref("Animation.pending")}} property.

## Examples

In the [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) example, players can get an ending with [Alice crying into a pool of tears](https://codepen.io/rachelnabors/pen/EPJdJx?editors=0010). In the game, for performance reasons, the tears should only be animating when they're visible. So they must be paused as soon as they are animated like so:

```js
// Setting up the tear animations

tears.forEach((el) => {
  el.animate(
    tearsFalling,
    {
      delay: getRandomMsRange(-1000, 1000), // randomized for each tear
      duration: getRandomMsRange(2000, 6000), // randomized for each tear
      iterations: Infinity,
      easing: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)'
    });
  el.pause();
});

// Play the tears falling when the ending needs to be shown.

tears.forEach((el) => {
  el.play();
});

// Reset the crying tears animations and pause them.

tears.forEach((el) => {
  el.pause();
  el.currentTime = 0;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
