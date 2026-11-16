---
title: "SVGGradientElement: gradientUnits property"
short-title: gradientUnits
slug: Web/API/SVGGradientElement/gradientUnits
page-type: web-api-instance-property
browser-compat: api.SVGGradientElement.gradientUnits
---

{{APIRef("SVG")}}

The **`gradientUnits`** read-only property of the {{domxref("SVGGradientElement")}} interface reflects the {{SVGAttr("gradientUnits")}} attribute of the given element. It takes one of the `SVG_UNIT_TYPE_*` constants defined in {{domxref("SVGUnitTypes")}}.

## Value

An {{domxref("SVGAnimatedEnumeration")}}.

## Examples

### Accessing the `gradientUnits` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient1" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient1)" />
</svg>
```

```js
const gradient = document.getElementById("gradient1");
console.log(gradient.gradientUnits.baseVal); // Output: 1 (SVG_UNIT_TYPE_USERSPACEONUSE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
