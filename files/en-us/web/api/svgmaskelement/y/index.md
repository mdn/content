---
title: "SVGMaskElement: y property"
short-title: "y"
slug: Web/API/SVGMaskElement/y
page-type: web-api-instance-property
browser-compat: api.SVGMaskElement.y
---

{{APIRef("SVG")}}

The read-only **`y`** property of the {{domxref("SVGMaskElement")}} interface returns an {{domxref("SVGAnimatedLength")}} object containing the value of the {{SVGattr("y")}} attribute of the {{SVGElement("marker")}}. It represents the y-axis coordinate of the _top-left_ corner of the masking area.

> **Note:** Although this property is read-only, it is merely a container for two values you can modify, {{domxref("SVGAnimatedLength.baseVal", "baseVal")}} and {{domxref("SVGAnimatedLength.animVal", "animVal")}}.

## Value

An {{domxref("SVGAnimatedLength")}} object. The `baseVal` property of this object returns an {{domxref("SVGLength")}}, the value of which returns the `y` value.

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
        attributeName="y"
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
  const animValue = mask.y.animVal.value;
  const baseValue = mask.y.baseVal.value;
  log.textContent = `The 'y.animVal' is ${animValue}.\n`;
  log.textContent += `The 'y.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample('Example', 100, 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
