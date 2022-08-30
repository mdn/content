---
title: DocumentTimeline
slug: Web/API/DocumentTimeline
page-type: web-api-interface
tags:
  - API
  - Animation
  - AnimationTimeline
  - DocumentTimeline
  - Interface
  - Reference
  - Web Animations
  - waapi
  - web animations api
browser-compat: api.DocumentTimeline
---
{{ APIRef("Web Animations") }}

The **`DocumentTimeline`** interface of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) represents animation timelines, including the default document timeline (accessed via {{domxref("Document.timeline")}}).

{{InheritanceDiagram}}

## Constructor

- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
  - : Creates a new `DocumentTimeline` object associated with the active document of the current browsing context.

## Properties

_This interface inherits its property from its parent, {{domxref("AnimationTimeline")}}._

- {{domxref("AnimationTimeline.currentTime")}}
  - : Returns the time value in milliseconds for this timeline or `null` if it is inactive.

## Examples

We could share a single `documentTimeline` among multiple animations, thus allowing us to manipulate just that group of animations via their shared timeline. This bit of code would start all the cats animating 500 milliseconds into their animations:

```js
const cats = document.querySelectorAll('.sharedTimelineCat');
const sharedTimeline = new DocumentTimeline({ originTime: 500 });

for (const cat of cats) {
  const catKeyframes = new KeyframeEffect(cat, keyframes, timing);
  const catAnimation = new Animation(catKeyframes, sharedTimeline);
  catAnimation.play();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("Document.timeline")}}
- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
