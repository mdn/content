---
title: "SVGPatternElement: patternContentUnits property"
short-title: patternContentUnits
slug: Web/API/SVGPatternElement/patternContentUnits
page-type: web-api-instance-property
browser-compat: api.SVGPatternElement.patternContentUnits
---

{{APIRef("SVG")}}

The **`patternContentUnits`** read-only property of the {{domxref("SVGPatternElement")}} interface reflects the {{SVGAttr("patternContentUnits")}} attribute of the given {{SVGElement("pattern")}} element. It specifies the coordinate system for the pattern content and takes one of the constants defined in {{domxref("SVGUnitTypes")}}.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern
      id="pattern1"
      width="10"
      height="10"
      patternContentUnits="userSpaceOnUse">
      <circle cx="5" cy="5" r="5" fill="blue" />
    </pattern>
    <pattern
      id="pattern2"
      width="10"
      height="10"
      patternContentUnits="objectBoundingBox">
      <circle cx="5" cy="5" r="5" fill="red" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
  <rect x="100" y="0" width="100" height="100" fill="url(#pattern2)" />
</svg>
```

We can access the `patternContentUnits` attribute:

```js
const patterns = document.querySelectorAll("pattern");

console.log(patterns[0].patternContentUnits.baseVal); // output: 1 (SVGUnitTypes.USERSPACEONUSE)
console.log(patterns[1].patternContentUnits.baseVal); // output: 2 (SVGUnitTypes.OBJECTBOUNDINGBOX)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedEnumeration")}}
- {{domxref("SVGUnitTypes")}}
