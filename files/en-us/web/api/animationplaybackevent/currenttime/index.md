---
title: "AnimationPlaybackEvent: currentTime property"
short-title: currentTime
slug: Web/API/AnimationPlaybackEvent/currentTime
page-type: web-api-instance-property
browser-compat: api.AnimationPlaybackEvent.currentTime
---

{{ APIRef("Web Animations") }}

The **`currentTime`** read-only property of the {{domxref("AnimationPlaybackEvent")}} interface represents the current time of the animation that generated the event at the moment the event is queued. This will be unresolved if the animation was `idle` at the time the event was generated.

## Value

A number representing the current time in milliseconds, or `null`.

This property receives its value from either the {{domxref("AnimationPlaybackEvent/AnimationPlaybackEvent", "AnimationPlaybackEvent()")}} constructor or the {{domxref("Animation.currentTime")}} when the event is queued, without introducing additional inaccuracy.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
