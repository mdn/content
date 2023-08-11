---
title: "Window: scrollY property"
short-title: scrollY
slug: Web/API/Window/scrollY
page-type: web-api-instance-property
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

In practice, the returned value is a double-precision floating-point value with the range of
2^(-1022) to 2^(+1023). It indicates the number of pixels the document is currently scrolled
vertically from the origin, where a positive value means the content is scrolled to upward.
If the document is rendered on a subpixel-precise device, then the returned value is also
subpixel-precise and may contain a decimal component. If the document isn't scrolled at all
up or down, then `scrollY` is 0.

> **Note:** If you need an integer value, you can use {{jsxref("Math.round()")}} to round it off.

In more technical terms, `scrollY` returns the Y coordinate of the top edge
of the current {{Glossary("viewport")}}. If there is no viewport, the returned value is
0\.

## Examples

```js
// make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0); // reset the scroll position to the top left of the document.
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.scrollX")}}
