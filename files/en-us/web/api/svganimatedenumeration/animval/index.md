---
title: "SVGAnimatedEnumeration: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedEnumeration/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedEnumeration.animVal
---

{{APIRef("SVG")}}

The **`animVal`** property of the {{domxref("SVGAnimatedEnumeration")}} interface contains the current value of an SVG enumeration. If there is no animation, it is the same value as the {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}}.

## Value

An integer containing the current value of the enumeration

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
  <svg viewBox="0 0 100 100" width="200" height="200">
    <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
      <animate
        attributeName="clipPathUnits"
        values="userSpaceOnUse;objectBoundingBox;userSpaceOnUse"
        dur="2s"
        repeatCount="indefinite" />
      <circle cx="50" cy="50" r="25" />
    </clipPath>

    <rect id="r1" x="0" y="0" width="50" height="100" />

    <use clip-path="url(#clip1)" href="#r1" fill="lightblue" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const clipPath1 = document.getElementById("clip1");
const log = document.getElementById("log");

function displayLog() {
  const animValue = clipPath1.clipPathUnits.animVal;
  const baseValue = clipPath1.clipPathUnits.baseVal;
  log.textContent = `The 'clipPathUnits.animVal' is ${animValue}.\n`;
  log.textContent += `The 'clipPathUnits.baseVal' is ${baseValue}.`;
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

- {{domxref("SVGAnimatedEnumeration.baseVal")}}
