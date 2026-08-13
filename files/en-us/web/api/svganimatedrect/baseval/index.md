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

If the {{SVGAttr("viewBox")}} attribute is not set on the element, the value is a zero-initialized rectangle (`x`, `y`, `width`, and `height` all equal to `0`), as required by the SVG2 specification's [rules for reflecting an empty initial value](https://svgwg.org/svg2-draft/types.html#SVGObjectInitialization). Chrome returns such a zero rectangle in this case, but **Firefox returns `null` instead** ([bug 888307](https://bugzilla.mozilla.org/show_bug.cgi?id=888307), closed as "won't fix"). When no animation is applied, the same behavior applies to {{domxref("SVGAnimatedRect.animVal", "animVal")}}.

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

When the `viewBox` attribute is not set, the value differs between browsers:

```js
const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const baseVal2 = svg2.viewBox.baseVal;
console.log(baseVal2);
// DOMRect {x: 0, y: 0, width: 0, height: 0} in Chrome
// null in Firefox
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("viewBox")}}
- {{domxref("DOMRect")}}
