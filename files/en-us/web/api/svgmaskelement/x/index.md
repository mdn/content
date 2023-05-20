---
title: "SVGMaskElement: x property"
short-title: x
slug: Web/API/SVGMaskElement/x
page-type: web-api-instance-property
browser-compat: api.SVGMaskElement.x
---

{{APIRef("SVG")}}

The read-only **`x`** property of the {{domxref("SVGMaskElement")}} interface returns an {{domxref("SVGAnimatedLength")}} object containing the value of the {{SVGattr("x")}} attribute of the {{SVGElement("mask")}}. It represents the x-axis coordinate of the _top-left_ corner of the masking area.

> **Note:** Although this property is read-only, it is merely a container for two values you can modify, {{domxref("SVGAnimatedLength.baseVal", "baseVal")}} and {{domxref("SVGAnimatedLength.animVal", "animVal")}}.

## Value

An {{domxref("SVGAnimatedLength")}} object in the coordinate system defined by {{domxref("SVGMaskElement.maskUnits")}}. The `baseVal` property of this object returns an {{domxref("SVGLength")}}, the value of which returns the initial `x` value.

## Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<div>
  <svg viewBox="-10 -10 120 120" width="100" height="100">
    <mask id="mask" x="0" maskUnits="userSpaceOnUse">
      <!-- Everything under a white pixel will be visible -->
      <rect x="0" y="0" width="100" height="100" fill="white" />

      <!-- Everything under a black pixel will be invisible -->
      <path
        d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
        fill="black" />
      <animate
        attributeName="x"
        values="0;80;0"
        dur="5s"
        repeatCount="indefinite" />
    </mask>

    <polygon points="-10,110 110,110 110,-10" fill="orange" />

    <!-- with this mask applied, we "punch" a heart shape hole into the circle -->
    <circle cx="50" cy="50" r="50" mask="url(#mask)" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const mask = document.getElementById("mask");

function displayLog() {
  const animValue = mask.x.animVal.value;
  const baseValue = mask.x.baseVal.value;
  log.textContent = `The 'x.animVal' is ${animValue}.\n`;
  log.textContent += `The 'x.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample('Example', 100, 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
