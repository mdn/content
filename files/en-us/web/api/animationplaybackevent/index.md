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

{{InheritanceDiagram}}

## Constructor

- {{domxref("AnimationPlaybackEvent.AnimationPlaybackEvent", "AnimationPlaybackEvent()")}}
  - : Constructs a new `AnimationPlaybackEvent` object instance.

## Properties

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{readonlyinline}}
  - : The current time of the animation that generated the event.
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{readonlyinline}}
  - : The time value of the timeline of the animation that generated the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.playState")}}
