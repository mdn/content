---
title: SVGRect
slug: Web/API/SVGRect
page-type: web-api-interface
browser-compat: api.SVGRect
---

{{APIRef("SVG")}}

The **`SVGRect`**, an alias for {{DOMXref("DOMRect")}}, represents a rectangle. Rectangles consist of an `x` and `y` coordinate pair identifying a minimum `x` value, a minimum `y` value, and a `width` and `height`, which are constrained to be non-negative.

An `SVGRect` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

## Instance properties

- {{domxref("SVGRect.x")}}
  - : The exact effect of this coordinate depends on each element. If the attribute is not specified, the effect is as if a value of `0` were specified.
- {{domxref("SVGRect.y")}}
  - : The exact effect of this coordinate depends on each element. If the attribute is not specified, the effect is as if a value of `0` were specified.
- {{domxref("SVGRect.width")}}
  - : This represents the width of the rectangle. A value that is negative results to an error. A value of `0` disables rendering of the element
- {{domxref("SVGRect.height")}}
  - : This represents the height of the rectangle. A value that is negative results to an error. A value of `0` disables rendering of the element.

## Instance methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("DOMRect")}}
- {{DOMXref("DOMPoint")}} alias {{DOMXref("SVGPoint")}}
- {{DOMXref("DOMMatrix")}} alias {{DOMXref("SVGMatrix")}}
