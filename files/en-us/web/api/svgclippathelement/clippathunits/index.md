---
title: "SVGClipPathElement: clipPathUnits property"
short-title: clipPathUnits
slug: Web/API/SVGClipPathElement/clipPathUnits
page-type: web-api-instance-property
browser-compat: api.SVGClipPathElement.clipPathUnits
---

{{APIRef("SVG")}}

The read-only **`clipPathUnits`** property of the {{domxref("SVGClipPathElement")}} interface reflects the {{SVGAttr("clipPathUnits")}} attribute of a {{SVGElement("clipPath")}} element which defines the coordinate system to use for the content of the element.

> **Note:** Although this property is read-only, it is merely a container for two values you can modify, {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}} and {{domxref("SVGAnimatedEnumeration.animVal", "animVal")}}.

## Value

An {{domxref("SVGAnimatedEnumeration")}} representing the coordinate system. The possible values are defined in the {{domxref("SVGUnitTypes")}} interface:

- `0` (`SVG_UNIT_TYPE_UNKNOWN`)
  - : The type is not one of the predefined type.
- `1` (`SVG_UNIT_TYPE_USERSPACEONUSE`)
  - : Corresponds to a value of `userSpaceOnUse` for the {{SVGAttr("clipPathUnits")}} attribute and means that all coordinates inside the element refer to the user coordinate system as defined when the clipping path was created. It is the default value.
- `2` (`SVG_UNIT_TYPE_OBJECTBOUNDINGBOX`)
  - : Corresponds to a value of `objectBoundingBox` for the attribute and means that all coordinates inside the element are relative to the bounding box of the element the clipping path is applied to. It means that the origin of the coordinate system is the top left corner of the object bounding box and the width and height of the object bounding box are considered to have a length of 1 unit value.

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
      <circle cx="50" cy="50" r="35" />
    </clipPath>

    <clipPath id="clip2" clipPathUnits="objectBoundingBox">
      <circle cx=".5" cy=".5" r=".35" />
    </clipPath>

    <!-- Some reference rect to materialized to clip path -->
    <rect id="r1" x="0" y="0" width="45" height="45" />
    <rect id="r2" x="0" y="55" width="45" height="45" />
    <rect id="r3" x="55" y="55" width="45" height="45" />
    <rect id="r4" x="55" y="0" width="45" height="45" />

    <!-- The first 3 rect are clipped with userSpaceOnUse units -->
    <use clip-path="url(#clip1)" xlink:href="#r1" fill="red" />
    <use clip-path="url(#clip1)" xlink:href="#r2" fill="blue" />
    <use clip-path="url(#clip1)" xlink:href="#r3" fill="yellow" />

    <!-- The last rect is clipped with objectBoundingBox units -->
    <use clip-path="url(#clip2)" xlink:href="#r4" fill="green" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const clipPath1 = document.getElementById("clip1");
const clipPath2 = document.getElementById("clip2");

const log = document.getElementById("log");

log.textContent = `The clipPath used three times has a 'clipPathUnits' value of ${clipPath1.clipPathUnits.baseVal}
The clipPath used three times has a 'clipPathUnits' value of ${clipPath2.clipPathUnits.baseVal}`;
```

{{EmbedLiveSample("Examples", "280", "260")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("clipPathUnits")}}
- {{SVGElement("clipPath")}}
