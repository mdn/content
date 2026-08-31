---
title: "AnimationPlaybackEvent: currentTime property"
short-title: currentTime
slug: Web/API/AnimationPlaybackEvent/currentTime
page-type: web-api-instance-property
browser-compat: api.AnimationPlaybackEvent.currentTime
---

{{ APIRef("Web Animations") }}

The **`currentTime`** read-only property of the {{domxref("AnimationPlaybackEvent")}} interface represents the current time of the animation that generated the event at the moment the event is queued. For browser-generated `cancel` events, the value is `null`.

## Value

A number representing the current time in milliseconds, or `null`.

When a value is supplied to the {{domxref("AnimationPlaybackEvent/AnimationPlaybackEvent", "AnimationPlaybackEvent()")}} constructor, the browser does not apply timer rounding to the supplied time. For browser-generated `finish` and `remove` events, this property inherits the value and precision of {{domxref("Animation.currentTime")}} when the event is queued, without introducing additional inaccuracy.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
