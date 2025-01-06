---
title: "SVGGradientElement: gradientTransform property"
short-title: gradientTransform
slug: Web/API/SVGGradientElement/gradientTransform
page-type: web-api-instance-property
browser-compat: api.SVGGradientElement.gradientTransform
---

{{APIRef("SVG")}}

The **`gradientTransform`** read-only property of the {{domxref("SVGGradientElement")}} interface reflects the {{SVGAttr("gradientTransform")}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedTransformList")}}.

## Examples

### Accessing the `gradientTransform` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient3" gradientTransform="rotate(45)">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient3)" />
</svg>
```

```js
// Accessing the gradientTransform property
const gradient = document.getElementById("gradient3");
console.dir(gradient.gradientTransform.baseVal);
// Output: SVGTransformList object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
