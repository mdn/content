---
title: "SVGAnimatedRect: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedRect/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedRect.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedRect")}} interface represents the current animated value of the `viewBox` attribute of an SVG element as a read-only {{domxref("DOMRectReadOnly")}} object. It provides access to the rectangle's dynamic state, including the `x`, `y`, `width`, and `height` values during the animation.

If no animation is applied, the `animVal` property reflects the SVG element's {{SVGAttr("viewBox")}} attribute value and will be identical to {{domxref("SVGAnimatedRect.baseVal")}}.

## Value

A {{domxref("DOMRectReadOnly")}} object representing the animated value of the `viewBox` attribute.

## Examples

```html
<svg viewBox="0 0 200 100" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
  const svgElement = document.getElementById("mySvg");
  const animatedRect = svgElement.viewBox.animVal;

  // Log the animated value (assuming an animation is applied)
  console.log(animatedRect.x);
  console.log(animatedRect.y);
  console.log(animatedRect.width);
  console.log(animatedRect.height);
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("viewBox")}}
- {{domxref("DOMRectReadOnly")}}
