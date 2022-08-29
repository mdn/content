---
title: Window.frames
slug: Web/API/Window/frames
page-type: web-api-instance-property
tags:
  - API
  - Gecko
  - HTML DOM
  - NeedsContent
  - NeedsUpdate
  - Property
  - Reference
  - Window
browser-compat: api.Window.frames
---

{{APIRef("DOM")}}

Returns the window itself, which is an array-like object, listing the direct sub-frames
of the current window.

## Value

A list of frame objects. It is similar to an
array in that it has a `length` property and its items can be accessed
using the `[i]` notation.

- `frameList === window` evaluates to true.
- Each item in the `window.frames` pseudo-array represents the {{domxref("Window")}}
  object corresponding to the given {{HTMLElement("frame")}}'s or
  {{HTMLElement("iframe")}}'s content, not the `frame` or `iframe` DOM element (i.e.,
  `window.frames[0]` is the same thing as
  `document.getElementsByTagName("iframe")[0].contentWindow`).
- For more details about the returned value, refer to this [thread on mozilla.dev.platform](https://groups.google.com/d/topic/mozilla.dev.platform/VijG80aFnU8?hl=en&pli=1).

## Examples

```js
const frames = window.frames; // or const frames = window.parent.frames;
for (let i = 0; i < frames.length; i++) {
  // do something with each subframe as frames[i]
  frames[i].document.body.style.background = "red";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
