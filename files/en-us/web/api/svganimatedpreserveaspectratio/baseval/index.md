---
title: "SVGAnimatedPreserveAspectRatio: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedPreserveAspectRatio/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedPreserveAspectRatio.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** read-only property of the {{domxref("SVGAnimatedPreserveAspectRatio")}} interface represents the base (non-animated) value of the {{SVGAttr("preserveAspectRatio")}} attribute of an SVG element.

## Value

An {{domxref("SVGPreserveAspectRatio")}} object.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <image
    id="myImage"
    href="crows.jpg"
    width="50"
    height="50"
    preserveAspectRatio="xMinYMin meet">
    <animate
      attributeName="preserveAspectRatio"
      from="xMinYMin meet"
      to="xMaxYMax slice"
      dur="5s"
      fill="freeze"
      repeatCount="1" />
  </image>
</svg>
```

This example defines an `<image>` element which animates its `preserveAspectRatio` attribute. The animation runs once and sets the `fill` attribute to "freeze", so the effect of the animation is persisted after the animation finishes.

We run the following code immediately when page loads:

```js
const image = document.querySelector("#myImage");
const baseVal = image.preserveAspectRatio.baseVal;

console.log(baseVal.meetOrSlice); // Output: 1 (SVG_MEETORSLICE_MEET)
```

If we log the values of `baseVal.meetOrSlice` again after the animation has finished, we will see the following:

```js
console.log(baseVal.meetOrSlice); // Output: 1 (SVG_MEETORSLICE_MEET)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGPreserveAspectRatio")}}
- {{domxref("SVGElement")}}
