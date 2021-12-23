---
title: AnimationPlaybackEvent
slug: Web/API/AnimationPlaybackEvent
tags:
  - API
  - Animation
  - AnimationPlaybackEvent
  - Experimental
  - Interface
  - Reference
  - events
  - waapi
  - web animations api
browser-compat: api.AnimationPlaybackEvent
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

The AnimationPlaybackEvent interface of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) represents animation events.

As animations play, they report changes to their {{domxref("Animation.playState", "playState")}} through animation events.

## Constructor

- {{domxref("AnimationPlaybackEvent.AnimationPlaybackEvent()")}}
  - : Constructs a new `AnimationPlaybackEvent` object instance.

## Attributes

- {{domxref("AnimationPlaybackEvent.currentTime")}}
  - : The current time of the animation that generated the event.
- {{domxref("AnimationPlaybackEvent.timelineTime")}}
  - : The time value of the timeline of the animation that generated the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.playState")}}
