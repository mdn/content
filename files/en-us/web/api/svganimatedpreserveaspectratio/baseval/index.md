---
title: "SVGAnimatedPreserveAspectRatio: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedPreserveAspectRatio/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedPreserveAspectRatio.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** read-only property of the {{domxref("SVGAnimatedPreserveAspectRatio")}} interface represents the base (non-animated) value of the {{SVGAttr("preserveAspectRatio")}} attribute of an SVG element.

## Value

An {{domxref("SVGPreserveAspectRatio")}} object.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <image
    href="image.jpg"
    width="50"
    height="50"
    preserveAspectRatio="xMinYMin meet" />
</svg>
```

You can access the `baseVal` of the `preserveAspectRatio` attribute like this:

```js
const image = document.querySelector("image");
const preserveAspectRatio = image.preserveAspectRatio.baseVal;

console.log(preserveAspectRatio.align); // output: "xMinYMin"
console.log(preserveAspectRatio.meetOrSlice); // output: "meet"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGPreserveAspectRatio")}}
- {{domxref("SVGElement")}}
