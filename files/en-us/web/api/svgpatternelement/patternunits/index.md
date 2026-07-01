---
title: "SVGPatternElement: patternUnits property"
short-title: patternUnits
slug: Web/API/SVGPatternElement/patternUnits
page-type: web-api-instance-property
browser-compat: api.SVGPatternElement.patternUnits
---

{{APIRef("SVG")}}

The **`patternUnits`** read-only property of the {{domxref("SVGPatternElement")}} interface reflects the {{SVGAttr("patternUnits")}} attribute of the given {{SVGElement("pattern")}} element. It specifies the coordinate system for the pattern content and takes one of the constants defined in {{domxref("SVGUnitTypes")}}.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="pattern1" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="5" cy="5" r="5" fill="blue" />
    </pattern>
    <pattern
      id="pattern2"
      width="10"
      height="10"
      patternUnits="objectBoundingBox">
      <circle cx="5" cy="5" r="5" fill="red" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
  <rect x="100" y="0" width="100" height="100" fill="url(#pattern2)" />
</svg>
```

We can access the `patternUnits` attribute:

```js
const patterns = document.querySelectorAll("pattern");

console.log(patterns[0].patternUnits.baseVal); // output: 1 (SVGUnitTypes.USERSPACEONUSE)
console.log(patterns[1].patternUnits.baseVal); // output: 2 (SVGUnitTypes.OBJECTBOUNDINGBOX)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedEnumeration")}}
- {{domxref("SVGUnitTypes")}}
