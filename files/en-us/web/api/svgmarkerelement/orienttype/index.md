---
title: SVGMarkerElement.orientType
slug: Web/API/SVGMarkerElement/orientType
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - orientType
  - SVGMarkerElement
browser-compat: api.SVGMarkerElement.orientType
---
{{APIRef("SVG")}}

The **`orientType`** read-only property of the {{domxref("SVGMarkerElement")}} interface returns an {{domxref("SVGAnimatedEnumeration")}} object indicating whether the {{SVGattr("orient")}} attribute is `auto`, an angle value, or something else.

This _something else_ is most likely to be the keyword `auto-start-reverse` however the spec leaves it open for this to be other values. Unsupported values will generally be thrown away by the parser, leaving the value the default of `auto`.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object. This contains one of the following values:

- `0`
  - : `SVG_MARKER_ORIENT_UNKNOWN` which means that the {{SVGattr("orient")}} attribute has a value other than `auto` or an angle.
- `1`
  - : `SVG_MARKERUNITS_ORIENT_AUTO` which means that the {{SVGattr("orient")}} attribute has the keyword value `auto`.
- `2`
  - : `SVG_MARKERUNITS_ORIENT_ANGLE` which means that the {{SVGattr("orient")}} attribute has an {{cssxref("angle")}} or {{cssxref("number")}} value indicating the angle.

## Examples

The `orientType` property returns an {{domxref("SVGAnimatedEnumeration")}} object. As the value of the {{SVGattr("orient")}} attribute is an angle, returning the `SVGAnimatedEnumeration.baseVal` returns `2`.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient=".63deg">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.orientType.baseVal); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
