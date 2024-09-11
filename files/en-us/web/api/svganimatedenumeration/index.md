---
title: SVGAnimatedEnumeration
slug: Web/API/SVGAnimatedEnumeration
page-type: web-api-interface
browser-compat: api.SVGAnimatedEnumeration
---

{{APIRef("SVG")}}

The **`SVGAnimatedEnumeration`** interface describes attribute values which are constants from a particular enumeration and which can be animated.

## Instance properties

- {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}}
  - : An integer that is the base value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedEnumeration.animVal", "animVal")}}
  - : If the given attribute or property is being animated, it contains the current animated value of the attribute or property. If the given attribute or property is not currently being animated, it contains the same value as `baseVal`.

## Instance methods

The `SVGAnimatedEnumeration` interface do not provide any specific methods.

## Examples

Considering this snippet with a {{SVGElement("clipPath")}} element: Its {{SVGAttr("clipPathUnits")}} is associated with a `SVGAnimatedEnumeration` object.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

This snippet gets the element, and logs the `baseVal` and `animVal` of the {{domxref("SVGClipPathElement.clipPathUnits")}} property. As no animation is happening, they have the same value.

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // Logs 1 that correspond to userSpaceOnUse
console.log(clipPathElt.clipPathUnits.animVal); // Logs 1 that correspond to userSpaceOnUse
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
