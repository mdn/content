---
title: "SVGAnimatedLength: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedLength/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedLength.animVal
---

{{APIRef("SVG")}}

The **`animVal`** property of the {{domxref("SVGAnimatedLength")}} interface contains the current value of an SVG enumeration. If there is no animation, it is the same value as the {{domxref("SVGAnimatedLength.baseVal", "baseVal")}}.

## Value

An {{domxref("SVGLength")}} containing the current value of the enumeration.

## Examples

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle cx="50" cy="50" r="20" fill="gold" id="circle">
    <animate
      attributeName="r"
      values="20;25;10;20"
      dur="8s"
      repeatCount="indefinite" />
  </circle>
</svg>
<pre id="log"></pre>
```

```js
const circle = document.getElementById("circle");
const log = document.getElementById("log");

function displayLog() {
  const animValue = circle.r.animVal.value;
  const baseValue = circle.r.baseVal.value;
  log.textContent = `The 'circle.r.animVal' is ${animValue}.\n`;
  log.textContent += `The 'circle.r.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample("Examples", "280", "260")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLength.baseVal")}}
