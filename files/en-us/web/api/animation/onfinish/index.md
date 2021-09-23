---
title: Animation.onfinish
slug: Web/API/Animation/onfinish
tags:
  - API
  - Animation
  - Event Handler
  - Property
  - Reference
  - Web Animations
  - events
  - onfinish
  - waapi
  - web animations api
browser-compat: api.Animation.onfinish
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The {{domxref("Animation")}} interface's **`onfinish`**
property (from the [Web Animations
API](/en-US/docs/Web/API/Web_Animations_API)) is the event handler for the {{event("finish")}} event. This event is sent
when the animation finishes playing.

The `finish` event occurs when the animation completes naturally, as well as
when the {{domxref("Animation.finish()")}} method is called to immediately cause the
animation to finish up.

> **Note:** The `"paused"` play state supersedes the `"finished"` play
> state; if the animation is both paused and finished, the `"paused"` state
> is the one that will be reported. You can force the animation into the
> `"finished"` state by setting its {{domxref("Animation.startTime",
    "startTime")}} to
> `document.timeline.currentTime - (Animation.currentTime * Animation.playbackRate)`.

## Syntax

```js
var finishHandler = Animation.onfinish;

Animation.onfinish = finishHandler;
```

### Value

A function to be called to handle the {{event("finish")}} event, or `null`
if no `finish` event handler is set.

## Examples

`Animation.onfinish` is used several times in the Alice in Web Animations
API Land [Growing/Shrinking Alice
Game](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010). Here is one instance where we add pointer events back to an element after
its opacity animation has faded it in:

```js
// Add an animation to the game's ending credits
var endingUI = document.getElementById("ending-ui");
var bringUI = endingUI.animate(keysFade, timingFade);

// Pause said animation's credits
bringUI.pause();

// This function removes pointer events on the credits.
hide(endingUI);

// When the credits are later faded in,
// we re-add the pointer events when they're done
bringUI.onfinish = function() {
  endingUI.style.pointerEvents = 'auto';
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.finish()")}}
