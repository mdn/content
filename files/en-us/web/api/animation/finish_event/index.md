---
title: 'Animation: finish event'
slug: Web/API/Animation/finish_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
browser-compat: api.Animation.finish_event
---
{{ APIRef("Web Animations") }}

The **`finish`** event of the {{domxref("Animation")}} interface is fired when the animation finishes playing, either when the animation completes naturally, or
when the {{domxref("Animation.finish()")}} method is called to immediately cause the
animation to finish up.

> **Note:** The `"paused"` play state supersedes the `"finished"` play
> state; if the animation is both paused and finished, the `"paused"` state
> is the one that will be reported. You can force the animation into the
> `"finished"` state by setting its {{domxref("Animation.startTime",
    "startTime")}} to
> `document.timeline.currentTime - (Animation.currentTime * Animation.playbackRate)`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('finish', (event) => { })
onfinish = (event) => { }
```

## Event type

An {{domxref("AnimationPlaybackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : The current time of the animation that generated the event.
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : The time value of the timeline of the animation that generated the event.

## Examples

`Animation.onfinish` is used several times in the Alice in Web Animations API Land
[Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010).
Here is one instance where we add pointer events back to an element after
its opacity animation has faded it in:

```js
// Add an animation to the game's ending credits
const endingUI = document.getElementById("ending-ui");
const bringUI = endingUI.animate(keysFade, timingFade);

// Pause said animation's credits
bringUI.pause();

// This function removes pointer events on the credits.
hide(endingUI);

// When the credits are later faded in,
// we re-add the pointer events when they're done
bringUI.onfinish = (event) => {endingUI.style.pointerEvents = 'auto';};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.finish()")}}
