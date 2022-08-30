---
title: AnimationPlaybackEvent
slug: Web/API/AnimationPlaybackEvent
page-type: web-api-interface
tags:
  - API
  - Animation
  - AnimationPlaybackEvent
  - Interface
  - Reference
  - events
  - waapi
  - web animations api
browser-compat: api.AnimationPlaybackEvent
---
{{ APIRef("Web Animations") }}

The AnimationPlaybackEvent interface of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) represents animation events.

As animations play, they report changes to their {{domxref("Animation.playState", "playState")}} through animation events.

{{InheritanceDiagram}}

## Constructor

- {{domxref("AnimationPlaybackEvent.AnimationPlaybackEvent", "AnimationPlaybackEvent()")}}
  - : Constructs a new `AnimationPlaybackEvent` object instance.

## Properties

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : The current time of the animation that generated the event.
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : The time value of the timeline of the animation that generated the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.playState")}}
