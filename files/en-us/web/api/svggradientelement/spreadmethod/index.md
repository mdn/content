---
title: "SVGGradientElement: spreadMethod property"
short-title: spreadMethod
slug: Web/API/SVGGradientElement/spreadMethod
page-type: web-api-instance-property
browser-compat: api.SVGGradientElement.spreadMethod
---

{{APIRef("SVG")}}

The **`spreadMethod`** read-only property of the {{domxref("SVGGradientElement")}} interface reflects the {{SVGAttr("spreadMethod")}} attribute of the given element. It takes one of the `SVG_SPREADMETHOD_*` constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}}.

## Examples

### Accessing the `spreadMethod` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient2" spreadMethod="reflect">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="yellow" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient2)" />
</svg>
```

```js
const gradient = document.getElementById("gradient2");
console.log(gradient.spreadMethod.baseVal); // Output: 2 (SVG_SPREADMETHOD_REFLECT)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
