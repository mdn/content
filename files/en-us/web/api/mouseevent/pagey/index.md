---
title: "MouseEvent: pageY property"
short-title: pageY
slug: Web/API/MouseEvent/pageY
page-type: web-api-instance-property
browser-compat: api.MouseEvent.pageY
---

{{APIRef("UI Events")}}

The **`pageY`** read-only property of the {{domxref("MouseEvent")}} interface returns the Y (vertical) coordinate (in pixels) at which the mouse was clicked, relative to the left edge of the entire document.
This includes any portion of the document not currently visible.

Being based on the edge of the document as it is, this property takes into account any vertical scrolling of the page.
For example, if the page is scrolled such that 200 pixels of the top side of the document are scrolled out of view, and the mouse is clicked 100 pixels below the top edge of the view, the value returned by `pageY` will be 300.

Originally, this property was defined as a `long` integer. The [CSSOM View Module](/en-US/docs/Web/CSS/CSSOM_view) redefined it as a `double` float.
See the [Browser compatibility](#browser_compatibility) section for details.

See [Coordinate systems](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems#page) for additional information about coordinates specified in this fashion.

## Value

A `double` floating-point number of pixels from the top edge of the _document_ at which the mouse was clicked, regardless of any scrolling or viewport positioning that may be in effect.

This property was originally specified in the Touch Events specification as a long integer, but was redefined in the CSSOM View Module to be a double-precision
floating-point number to allow for subpixel precision.
Even though numeric types both are represented by `Number` in JavaScript, they may be handled differently internally in the browser's code, resulting in potential behavior differences.

See [Browser compatibility](#browser_compatibility) to learn which browsers have been updated to use the revised data type.

## Examples

```js
let pageY = event.pageY;
```

## Specifications

{{Specifications}}

Prior to being added to the CSSOM View specification, `pageX` and `pageY` were available on the {{domxref("UIEvent")}} interface in a limited subset of browsers for a short time.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent.pageX")}}
- [Coordinate systems](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems)
