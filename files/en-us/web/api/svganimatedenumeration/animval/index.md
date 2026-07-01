---
title: "SVGAnimatedEnumeration: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedEnumeration/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedEnumeration.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedEnumeration")}} interface interface represents the value of an SVG enumeration.

In SVG 2, `animVal` reflects the non-animated value of the attribute: it is the same as {{domxref("SVGAnimatedEnumeration/baseVal", "baseVal")}} .

## Value

An integer representing the value of the enumeration.

The allowed values depend on the attribute that is reflected.
This property cannot be written.

## Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the property is set to any value.

## Examples

### Basic usage

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

The following JavaScript gets the element, and logs the `animValue` of the {{domxref("SVGClipPathElement.clipPathUnits")}} property.

```js
const clipPath1 = document.getElementById("clip1");
const log = document.getElementById("log");

function displayLog() {
  const animValue = clipPath1.clipPathUnits.animVal;
  const baseValue = clipPath1.clipPathUnits.baseVal;
  log.textContent = `The 'clipPathUnits.animVal' is ${animValue}.\n`;
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
