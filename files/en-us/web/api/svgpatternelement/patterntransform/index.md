---
title: "SVGPatternElement: patternTransform property"
short-title: patternTransform
slug: Web/API/SVGPatternElement/patternTransform
page-type: web-api-instance-property
browser-compat: api.SVGPatternElement.patternTransform
---

{{APIRef("SVG")}}

The **`patternTransform`** read-only property of the {{domxref("SVGPatternElement")}} interface reflects the {{SVGAttr("patternTransform")}} attribute of the given {{SVGElement("pattern")}} element. This property holds the transformation applied to the pattern itself, allowing for operations like `translate`, `rotate`, `scale`, and `skew`.

## Value

An {{domxref("SVGAnimatedTransformList")}} object.

## Example

In this example, the pattern is rotated by 20 degrees, skewed on the X-axis by 30 degrees, and scaled by a factor of 1 horizontally and 0.5 vertically:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Apply a transform on the tile -->
  <pattern
    id="p1"
    width=".25"
    height=".25"
    patternTransform="rotate(20)
                      skewX(30)
                      scale(1 0.5)">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Apply the transformed pattern tile -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedEnumeration")}}
- {{domxref("SVGUnitTypes")}}
