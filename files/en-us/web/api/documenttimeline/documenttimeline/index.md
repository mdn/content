---
title: DocumentTimeline()
slug: Web/API/DocumentTimeline/DocumentTimeline
page-type: web-api-constructor
tags:
  - API
  - Animation
  - Constructor
  - DocumentTimeline
  - DocumentTimeline()
  - Reference
  - waapi
  - web animations api
browser-compat: api.DocumentTimeline.DocumentTimeline
---
{{ APIRef("Web Animations API") }}

The **`DocumentTimeline()`** constructor of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) creates a new instance of the {{domxref("DocumentTimeline")}} object associated with the active document of the current browsing context.

## Syntax

```js
new DocumentTimeline(options)
```

### Parameters

- `options`
  - : An object specifying options for the new timeline. The following properties are available:
    - `originTime`
      - : A number that specifies the zero time for the `documentTimeline`
        as a real number of milliseconds relative to the {{domxref("PerformanceTiming.navigationStart","navigationStart")}} time of the active document
        for the current browsing context.

## Examples

We could share a single `documentTimeline` among multiple animations, thus allowing us to manipulate just that group of animations via their shared timeline. This bit of code would start all the cats animating 500 milliseconds into their animations:

```js
let cats = document.querySelectorAll('.sharedTimelineCat');
cats = Array.prototype.slice.call(cats);

const sharedTimeline = new DocumentTimeline({ originTime: 500 });

cats.forEach((cat) => {
  const catKeyframes = new KeyframeEffect(cat, keyframes, timing);
  const catAnimation = new Animation(catKeyframes, sharedTimeline);
  catAnimation.play();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}}
