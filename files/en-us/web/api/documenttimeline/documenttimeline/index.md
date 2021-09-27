---
title: DocumentTimeline()
slug: Web/API/DocumentTimeline/DocumentTimeline
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
{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

The **`DocumentTimeline()`** constructor of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) creates a new instance of the {{domxref("DocumentTimeline")}} object associated with the active document of the current browsing context.

## Syntax

```js
var sharedTimeline = new DocumentTimeline(options);
```

### Parameters

- options
  - : An object specifying options for the new timeline. Currently the only supported option is the `originTime` member which specifies the zero time for the `documentTimeline` as a real number of milliseconds relative to the {{domxref("PerformanceTiming.navigationStart","navigationStart")}} moment of the active document for the current browsing context.

## Examples

We could share a single `documentTimeline` among multiple animations, thus allowing us to manipulate just that group of animations via their shared timeline. This bit of code would start all the cats animating 500 milliseconds into their animations:

```js
var cats = document.querySelectorAll('.sharedTimelineCat');
cats = Array.prototype.slice.call(cats);

var sharedTimeline = new DocumentTimeline({ originTime: 500 });

cats.forEach(function(cat) {
  var catKeyframes = new KeyframeEffect(cat, keyframes, timing);
  var catAnimation = new Animation(catKeyframes, sharedTimeline);
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
