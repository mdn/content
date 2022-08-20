---
title: AnimationTimeline
slug: Web/API/AnimationTimeline
page-type: web-api-interface
tags:
  - API
  - Animation
  - AnimationTimeline
  - Interface
  - Reference
  - Web Animations
  - waapi
  - web animations api
browser-compat: api.AnimationTimeline
---
{{ APIRef("Web Animations") }}

The `AnimationTimeline` interface of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) represents the timeline of an animation. This interface exists to define timeline features (inherited by {{domxref("DocumentTimeline")}} and future timeline types) and is not itself directly used by developers. Anywhere you see `AnimationTimeline`, you should use `DocumentTimeline` or any other timeline type instead.

## Properties

- {{domxref("AnimationTimeline.currentTime")}} {{ReadOnlyInline}}
  - : Returns the time value in milliseconds for this timeline or `null` if this timeline is inactive.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("DocumentTimeline")}}
- {{domxref("Document.timeline")}}
