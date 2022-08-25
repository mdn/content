---
title: Window.scrollX
slug: Web/API/Window/scrollX
page-type: web-api-instance-property
tags:
  - API
  - CSSOM View
  - NeedsBrowserCompatibility
  - NeedsMarkupWork
  - NeedsMobileBrowserCompatibility
  - Property
  - Reference
browser-compat: api.Window.scrollX
---
{{ APIRef("CSSOM View") }}

The read-only **`scrollX`** property of the
{{domxref("Window")}} interface returns the number of pixels that the document is
currently scrolled horizontally. This value is subpixel precise in modern browsers,
meaning that it isn't necessarily a whole number. You can get the number of pixels the
document is scrolled vertically from the {{domxref("Window.scrollY", "scrollY")}}
property.

## Value

In practice, the returned value is a double-precision floating-point value with the
range of E(min)=-1022 to E(max)=1023 indicating the number of pixels the document is
currently scrolled horizontally from the origin, where a positive value means the content
is scrolled to the left. If the document is rendered on a subpixel-precise device, then
the returned value is also subpixel-precise and may contain a decimal component. If the
document isn't scrolled at all left or right, then `scrollX` is 0.

> **Note:** If you need an integer value, you can use {{jsxref("Math.round()")}} to round it off.

In more technical terms, `scrollX` returns the X coordinate of the left edge
of the current {{Glossary("viewport")}}. If there is no viewport, the returned value is
0\.

## Examples

This example checks the current horizontal scroll position of the document. If it's
greater than 400 pixels, the window is scrolled back to the beginning.

```js
if (window.scrollX > 400) {
  window.scroll(0,0);
}
```

## Notes

The `pageXOffset` property is an alias for the `scrollX` property:

```js
window.pageXOffset === window.scrollX; // always true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.scrollY")}}
