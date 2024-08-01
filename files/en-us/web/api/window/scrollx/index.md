---
title: "Window: scrollX property"
short-title: scrollX
slug: Web/API/Window/scrollX
page-type: web-api-instance-property
browser-compat: api.Window.scrollX
---

{{ APIRef("CSSOM View") }}

The read-only **`scrollX`** property of the {{domxref("Window")}} interface returns the number of pixels by which the document is currently scrolled horizontally. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. You can get the number of pixels the document is scrolled vertically from the {{domxref("Window.scrollY", "scrollY")}} property.

## Value

A double-precision floating-point value indicating the number of pixels by which the document is currently scrolled horizontally from the origin, where a positive value means the content is scrolled to the right (to reveal more content to the right). In more technical terms, `scrollX` returns the X coordinate of the left edge of the current {{Glossary("viewport")}}. If the document isn't scrolled at all left or right, then `scrollX` is 0. If there is no viewport, the returned value is 0. If the document is rendered on a subpixel-precise device, then the returned value is also subpixel-precise and may contain a decimal component.

> [!NOTE]
> If you need an integer value, you can use {{jsxref("Math.round()")}} to round it off.

It's possible for `scrollX` to be negative if the document can be scrolled to the left from the initial containing block. For example, if the document is right-to-left and content grows to the left.

Safari responds to overscrolling by updating `scrollX` beyond the maximum scroll position (unless the default "bounce" effect is disabled, such as by setting {{cssxref("overscroll-behavior")}} to `none`), while Chrome and Firefox do not.

This property is read-only. To scroll the window to a particular place, use {{domxref("Window.scroll()")}}.

## Examples

This example checks the current horizontal scroll position of the document. If it's greater than 400 pixels, the window is scrolled back to the beginning.

```js
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## Notes

The `pageXOffset` property is an alias for the `scrollX` property. This means if you haven't re-assigned either property, `window.pageXOffset === window.scrollX` is always true.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.scrollY")}}
