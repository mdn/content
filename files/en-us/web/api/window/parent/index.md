---
title: Window.parent
slug: Web/API/Window/parent
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - NeedsSpecTable
  - Property
  - Reference
  - Window
browser-compat: api.Window.parent
---
{{APIRef}}

The **`Window.parent`** property is a reference to the parent
of the current window or subframe.

If a window does not have a parent, its `parent` property is a reference to
itself.

When a window is loaded in an {{htmlelement("iframe")}}, {{htmlelement("object")}}, or
{{htmlelement("frame")}}, its parent is the window with the element embedding the
window.

## Value

A `Window` or {{htmlelement("iframe")}} object.

## Examples

```js
if (window.parent !== window.top) {
  // We're deeper than one down
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.frameElement")}} returns the specific element (such as
  `<iframe>`) the `window` is embedded into.
- {{domxref("window.top")}} returns a reference to the top-level window.
