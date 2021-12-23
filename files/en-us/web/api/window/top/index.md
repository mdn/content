---
title: Window.top
slug: Web/API/Window/top
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
  - Window
browser-compat: api.Window.top
---
{{APIRef}}

Returns a reference to the topmost window in the window hierarchy.

## Syntax

```js
var topWindow = window.top;
```

## Notes

Where the {{domxref("window.parent")}} property returns the immediate parent of the
current window, `window.top` returns the topmost window in the hierarchy of
window objects.

This property is especially useful when you are dealing with a window that is in a
subframe of a parent or parents, and you want to get to the top-level frameset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
