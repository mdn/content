---
title: "SVGAnimatedLength: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedLength/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedEnumeration.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** property of the {{domxref("SVGAnimatedLength")}} interface contains the initial value of an SVG enumeration.

## Value

A {{domxref("SVGLength")}} containing the initial value of the length.

## Examples

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle cx="50" cy="50" r="20px" fill="gold" id="circle"></circle>
</svg>
<pre id="log"></pre>
```

```js
const unit = [
  "unknown",
  "",
  "%",
  "em",
  "ex",
  "px",
  "cm",
  "mm",
  "in",
  "pt",
  "pc",
];
const circle = document.getElementById("circle");
const log = document.getElementById("log");
const baseValue = circle.r.baseVal.value;
const baseUnit = unit[circle.r.baseVal.unitType];

log.textContent = `The 'circle.r.baseVal' is ${baseValue} (in ${baseUnit}).`;
```

{{EmbedLiveSample("Examples", "280", "260")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLength.animVal")}}
