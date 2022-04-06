---
title: Window.frames
slug: Web/API/Window/frames
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
- Each item in the window\.frames pseudo-array represents the {{domxref("Window")}}
  object corresponding to the given {{HTMLElement("frame")}}'s or
  {{HTMLElement("iframe")}}'s content, not the (i)frame DOM element (i.e.,
  `window.frames[0]` is the same thing as
  `document.getElementsByTagName("iframe")[0].contentWindow`).
- For more details about the returned value, refer to this [thread
  on mozilla.dev.platform](http://groups.google.com/group/mozilla.dev.platform/browse_thread/thread/5628c6f346859d4f/169aa7004565066?hl=en&ie=UTF-8&oe=utf-8&q=window.frames&pli=1).

## Examples

```js
var frames = window.frames; // or // var frames = window.parent.frames;
for (var i = 0; i < frames.length; i++) {
  // do something with each subframe as frames[i]
  frames[i].document.body.style.background = "red";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
