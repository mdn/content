---
title: "SVGAnimatedRect: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedRect/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedRect.animVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedRect.animVal`** read-only property of the {{domxref("SVGAnimatedRect")}} interface represents the current animated value of the `viewBox` attribute. If the attribute is being animated, `animVal` reflects the current state of the animation. If no animation is applied, `animVal` will be identical to `baseVal`.

## Value

A {{domxref("DOMRectReadOnly")}} object representing the animated value of the `viewBox` attribute.

- If the `viewBox` attribute is being animated, `animVal` reflects the animated rectangle's x, y, width, and height.
- If no animation is applied, `animVal` is identical to `baseVal`.

## Examples

```html
<svg viewBox="0 0 200 100" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>

<script>
  const svgElement = document.getElementById("mySvg");
  const animatedRect = svgElement.viewBox.animVal;

  // Log the animated value (assuming an animation is applied)
  console.log(animatedRect.x); // Will show the current animated x value
  console.log(animatedRect.y); // Will show the current animated y value
  console.log(animatedRect.width); // Will show the current animated width
  console.log(animatedRect.height); // Will show the current animated height
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedRect.baseVal")}}
- {{domxref("DOMRectReadOnly")}}
