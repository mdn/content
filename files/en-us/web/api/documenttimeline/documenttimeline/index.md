---
title: "DocumentTimeline: DocumentTimeline() constructor"
short-title: DocumentTimeline()
slug: Web/API/DocumentTimeline/DocumentTimeline
page-type: web-api-constructor
browser-compat: api.DocumentTimeline.DocumentTimeline
---

{{ APIRef("Web Animations") }}

The **`DocumentTimeline()`** constructor of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) creates a new instance of the {{domxref("DocumentTimeline")}} object associated with the active document of the current browsing context.

## Syntax

```js-nolint
new DocumentTimeline(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object specifying options for the new timeline. The following properties are available:
    - `originTime` {{optional_inline}}
      - : A `number` that specifies the zero time for the {{domxref("DocumentTimeline")}}
        as a number of milliseconds relative to {{domxref("Performance.timeOrigin")}}.
        Defaults to `0`.

## Examples

### Origin time

A {{domxref("DocumentTimeline")}} with an `originTime` of zero counts time
starting from {{domxref("Performance.timeOrigin")}}. This is the same behavior
as {{domxref("Document.timeline")}}.

```js
const timeline = new DocumentTimeline();
console.log(timeline.currentTime === document.timeline.currentTime); // true
```

Setting a non-zero `originTime` will offset the {{domxref("DocumentTimeline")}}
from {{domxref("Document.timeline")}} by that amount:

```js
const offsetTimeline = new DocumentTimeline({ originTime: 500 });
console.log(document.timeline.currentTime - offsetTimeline.currentTime); // 500
```

A {{domxref("DocumentTimeline")}} relative to the current moment can be constructed with:

```js
const nowTimeline = new DocumentTimeline({
  originTime: document.timeline.currentTime,
});
console.log(nowTimeline.currentTime); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}}
