---
title: Window.scrollY
slug: Web/API/Window/scrollY
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - Property
  - Reference
  - Window
  - scrollY
browser-compat: api.Window.scrollY
---
{{APIRef("CSSOM View")}}

The read-only **`scrollY`** property
of the {{domxref("Window")}} interface returns the number of pixels that the document
is currently scrolled vertically.

This value is subpixel precise in modern
browsers, meaning that it isn't necessarily a whole number. You can get the number of
pixels the document is scrolled horizontally from the {{domxref("Window.scrollX",
  "scrollX")}} property.

## Value

In practice, the returned value is a double-precision floating-point value indicating
the number of pixels the document is currently scrolled vertically from the origin,
where a positive value means the content is scrolled to upward. If the document is
rendered on a subpixel-precise device, then the returned value is also subpixel-precise
and may contain a decimal component. If the document isn't scrolled at all up or down,
then `scrollY` is 0.

> **Note:** If you need an integer value, you can use {{jsxref("Math.round()")}} to round it off.

In more technical terms, `scrollY` returns the Y coordinate of the top edge
of the current {{Glossary("viewport")}}. If there is no viewport, the returned value is
0\.

## Examples

```js
// make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}

window.scrollByPages(1);
```

## Notes

Use this property to check that the document hasn't already been scrolled when using
relative scroll functions such as {{domxref("window.scrollBy", "scrollBy()")}},
{{domxref("window.scrollByLines", "scrollByLines()")}}, or
{{domxref("window.scrollByPages", "scrollByPages()")}}.

The `pageYOffset` property is an alias for the `scrollY`
property:

```js
window.pageYOffset === window.scrollY; // always true
```

For cross-browser compatibility, use `window.pageYOffset` instead of
`window.scrollY`. **Additionally**, older versions of Internet
Explorer (< 9) do not support either property and must be worked around by checking
other non-standard properties. A fully compatible example:

```js
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.scrollX")}}
