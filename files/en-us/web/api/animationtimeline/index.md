---
title: AnimationTimeline
slug: Web/API/AnimationTimeline
page-type: web-api-interface
browser-compat: api.AnimationTimeline
---

{{ APIRef("Web Animations") }}

The `AnimationTimeline` interface of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) represents the timeline of an animation. This interface exists to define timeline features (inherited by {{domxref("DocumentTimeline")}} and future timeline types) and is not itself directly used by developers. Anywhere you see `AnimationTimeline`, you should use `DocumentTimeline` or any other timeline type instead.

## Instance properties

- {{domxref("AnimationTimeline.currentTime", "currentTime")}} {{ReadOnlyInline}}
  - : Returns the time value in milliseconds for this timeline or `null` if this timeline is inactive.

## Instance methods

- {{domxref("AnimationTimeline.getCurrentTime", "getCurrentTime()")}} {{ReadOnlyInline}}
  - : Returns a representation of how far an animation has progressed through its associated timeline.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("AnimationTimeline")}}, {{domxref("DocumentTimeline")}}, {{domxref("ScrollTimeline")}}, {{domxref("ViewTimeline")}}
- {{domxref("Document.timeline")}}
