---
title: AnimationPlaybackEvent.timelineTime
slug: Web/API/AnimationPlaybackEvent/timelineTime
tags:
  - API
  - Animation
  - AnimationPlaybackEvent
  - Attribute
  - Experimental
  - Property
  - Reference
  - timelineTime
  - waapi
  - web animations api
browser-compat: api.AnimationPlaybackEvent.timelineTime
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

The **`timelineTime`** read-only property of the `{{domxref("AnimationPlaybackEvent")}}` interface represents the time value of the animation's {{domxref("AnimationTimeline", "timeline")}} at the moment the event is queued. This will be unresolved if the animation was not associated with a timeline at the time the event was generated or if the associated timeline was inactive.

## Value

A number representing the current time in milliseconds, or `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
- {{domxref("AnimationTimeline")}}
