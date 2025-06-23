---
title: "SVGFEBlendElement: mode property"
short-title: mode
slug: Web/API/SVGFEBlendElement/mode
page-type: web-api-instance-property
browser-compat: api.SVGFEBlendElement.mode
---

{{APIRef("SVG")}}

The **`mode`** read-only property of the {{domxref("SVGFEBlendElement")}} interface reflects the {{SVGAttr("mode")}} attribute of the given element. It takes one of the `SVG_FEBLEND_MODE_*` constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}}.

## Examples

### Accessing the `mode` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="blend-filter">
    <feBlend in="SourceGraphic" in2="SourceAlpha" mode="multiply" />
    <feBlend in="SourceGraphic" in2="BackgroundImage" mode="screen" />
  </filter>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#blend-filter)" />
  <circle
    cx="100"
    cy="100"
    r="50"
    style="fill:blue;"
    filter="url(#blend-filter)" />
</svg>
```

```js
const blends = document.querySelectorAll("feBlend");

console.log(blends[0].mode.baseVal); // Output: 2 (SVG_FEBLEND_MODE_MULTIPLY)
console.log(blends[1].mode.baseVal); // Output: 3 (SVG_FEBLEND_MODE_SCREEN)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
