---
title: "SVGMaskElement: width property"
short-title: width
slug: Web/API/SVGMaskElement/width
page-type: web-api-instance-property
browser-compat: api.SVGMaskElement.width
---

{{APIRef("SVG")}}

The read-only **`width`** property of the {{domxref("SVGMaskElement")}} interface returns an {{domxref("SVGAnimatedLength")}} object containing the value of the {{SVGattr("width")}} attribute of the {{SVGElement("marker")}}.

> **Note:** Although this property is read-only, it is merely a container for two values you can modify, {{domxref("SVGAnimatedLength.baseVal", "baseVal")}} and {{domxref("SVGAnimatedLength.animVal", "animVal")}}.

## Value

An {{domxref("SVGAnimatedLength")}} object. The `baseVal` property of this object returns an {{domxref("SVGLength")}}, the value of which returns the `width` value.

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
    <mask id="mask" x="0" maskUnits="objectBoundingBox">
      <!-- Everything under a white pixel will be visible -->
      <rect x="0" y="0" width="100" height="100" fill="white" />

      <!-- Everything under a black pixel will be invisible -->
      <path
        d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
        fill="black" />
      <animate
        attributeName="width"
        values="144;0;144"
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
  const animValue = mask.width.animVal.value;
  const baseValue = mask.width.baseVal.value;
  log.textContent = `The 'width.animVal' is ${animValue}.\n`;
  log.textContent += `The 'width.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample('Example', 100, 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
