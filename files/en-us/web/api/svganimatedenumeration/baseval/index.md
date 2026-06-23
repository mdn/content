---
title: "SVGAnimatedEnumeration: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedEnumeration/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedEnumeration.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** property of the {{domxref("SVGAnimatedEnumeration")}} interface represents the value of an SVG enumeration.

## Value

An integer representing the base value of the enumeration.
Ths is the non-animated content value of the corresponding attribute.

The allowed values depend on the attribute that is reflected.

## Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the property is set to a constant that is not in the set of defined enumerations, or to `0`, which represents the "unknown attribute" value.

## Examples

### Basic usage

Considering this snippet with a {{SVGElement("clipPath")}} element: Its {{SVGAttr("clipPathUnits")}} is associated with an {{domxref("SVGAnimatedEnumeration")}} object.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

This snippet gets the element, and logs the `baseVal` of the {{domxref("SVGClipPathElement.clipPathUnits")}} property.

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // Logs 1 that correspond to userSpaceOnUse
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedEnumeration.animVal")}}
