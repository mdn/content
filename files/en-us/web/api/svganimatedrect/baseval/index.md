---
title: "SVGAnimatedRect: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedRect/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedRect.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** read-only property of the {{domxref("SVGAnimatedRect")}} interface represents the current non-animated value of the `viewBox` attribute of an SVG element.

This property reflects the SVG element's {{SVGAttr("viewBox")}} attribute value as a read-only {{domxref("DOMRect")}} object. It provides access to the static rectangle defined by the `viewBox` attribute, including the `x`, `y`, `width`, and `height` values.

## Value

A {{domxref("DOMRect")}} object representing the current non-animated value of the `viewBox` attribute.

## Examples

```html
<svg viewBox="0 0 200 100" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.getElementById("mySvg");
const animatedRect = svgElement.viewBox.baseVal;

// Access the non-animated base value
console.log(animatedRect.x); // 0
console.log(animatedRect.y); // 0
console.log(animatedRect.width); // 200
console.log(animatedRect.height); // 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("viewBox")}}
- {{domxref("DOMRect")}}
