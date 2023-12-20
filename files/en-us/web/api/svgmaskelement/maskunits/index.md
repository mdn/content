---
title: "SVGMaskElement: maskUnits property"
short-title: maskUnits
slug: Web/API/SVGMaskElement/maskUnits
page-type: web-api-instance-property
browser-compat: api.SVGMaskElement.maskUnits
---

{{APIRef("SVG")}}

The read-only **`maskUnits`** property of the {{domxref("SVGMaskElement")}} interface reflects the {{SVGAttr("maskUnits")}} attribute of a {{SVGElement("mask")}} element which defines the coordinate system to use for the mask of the element.

> **Note:** Although this property is read-only, it is merely a container for two values you can modify, {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}} and {{domxref("SVGAnimatedEnumeration.animVal", "animVal")}}.

## Value

An {{domxref("SVGAnimatedEnumeration")}} representing the coordinate system. The possible values are defined in the {{domxref("SVGUnitTypes")}} interface:

- `0` (`SVG_UNIT_TYPE_UNKNOWN`)
  - : The type is not one of the predefined types.
- `1` (`SVG_UNIT_TYPE_USERSPACEONUSE`)
  - : Corresponds to a value of `userSpaceOnUse` for the {{SVGAttr("maskUnits")}} attribute and means that all coordinates inside the element refer to the user coordinate system as defined when the mask was created. It is the default value.
- `2` (`SVG_UNIT_TYPE_OBJECTBOUNDINGBOX`)
  - : Corresponds to a value of `objectBoundingBox` for the attribute and means that all coordinates inside the element are relative to the bounding box of the element the mask is applied to. It means that the origin of the coordinate system is the top left corner of the object bounding box and the width and height of the object bounding box are considered to have a length of 1 unit value.

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
  <svg
    viewBox="0 0 100 100"
    height="200"
    width="200"
    xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask1"
      maskUnits="userSpaceOnUse"
      x="20%"
      y="20%"
      width="60%"
      height="60%">
      <rect fill="black" x="0" y="0" width="100%" height="100%" />
      <circle fill="white" cx="50" cy="50" r="35" />
    </mask>

    <mask
      id="mask2"
      maskUnits="objectBoundingBox"
      x="20%"
      y="20%"
      width="60%"
      height="60%">
      <rect fill="black" x="0" y="0" width="100%" height="100%" />
      <circle fill="white" cx="50" cy="50" r="35" />
      <animate
        attributeName="maskUnits"
        values="objectBoundingBox;userSpaceOnUse"
        dur="1s"
        repeatCount="indefinite" />
    </mask>

    <!-- Some reference rect to materialized the mask -->
    <rect id="r1" x="0" y="0" width="45" height="45" />
    <rect id="r2" x="0" y="55" width="45" height="45" />
    <rect id="r3" x="55" y="55" width="45" height="45" />
    <rect id="r4" x="55" y="0" width="45" height="45" />

    <!-- The first 3 rect are masked with useSpaceOnUse units -->
    <use mask="url(#mask1)" href="#r1" fill="blue" />
    <use mask="url(#mask1)" href="#r2" fill="green" />
    <use mask="url(#mask1)" href="#r3" fill="yellow" />

    <!-- The last rect is masked with objectBoundingBox units -->
    <use mask="url(#mask2)" href="#r4" fill="lightblue" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const unitType = ["unknown", "userSpaceOnUse", "objectBoundingBox"];

const mask = document.getElementById("mask2");
const log = document.getElementById("log");

function displayLog() {
  const baseValue = unitType[mask.maskUnits.baseVal];
  const animValue = unitType[mask.maskUnits.animVal];
  log.textContent = `The top-right 'maskUnits.baseVal' coord system : ${baseValue}\n`;
  log.textContent += `The top-right 'maskUnits.animVal' coord system : ${animValue}`;
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

- {{SVGAttr("maskUnits")}}
- {{SVGElement("mask")}}
