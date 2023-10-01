---
title: "Animation: timeline property"
short-title: timeline
slug: Web/API/Animation/timeline
page-type: web-api-instance-property
browser-compat: api.Animation.timeline
---

{{ APIRef("Web Animations") }}

The **`Animation.timeline`** property of the {{domxref("Animation")}} interface returns or sets the {{domxref("AnimationTimeline", "timeline")}} associated with this animation. A timeline is a source of time values for synchronization purposes, and is an {{domxref("AnimationTimeline")}}-based object. By default, the animation's timeline and the {{domxref("Document")}}'s timeline are the same.

## Value

A {{domxref("AnimationTimeline", "timeline object", "", 1)}} to use as the timing source for the animation, or `null` to use the default, which is the {{domxref("Document")}}'s timeline.

## Examples

Here we set the animation's timeline to be the same as the document's timeline (this is the default timeline for all animations, by the way):

```js
animation.timeline = document.timeline;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("AnimationTimeline")}} the parent object all timelines inherit from.
- {{domxref("DocumentTimeline")}} the only kind of timeline object available at this time.
- {{domxref("Document.timeline")}} is the default timeline all animations are assigned.
