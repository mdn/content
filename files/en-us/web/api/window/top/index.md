---
title: "Window: top property"
short-title: top
slug: Web/API/Window/top
page-type: web-api-instance-property
browser-compat: api.Window.top
---

{{APIRef}}

Returns a reference to the topmost window in the window hierarchy.

## Value

The reference to the topmost window.

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
