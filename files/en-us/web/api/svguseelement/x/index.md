---
title: "SVGUseElement: x property"
short-title: x
slug: Web/API/SVGUseElement/x
page-type: web-api-instance-property
browser-compat: api.SVGUseElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGUseElement")}} interface describes the x-axis coordinate of the start point of the referenced element as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("x")}} attribute on the {{SVGElement("use")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the x-coordinate of the top-left corner of the referenced element in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <circle id="circle1" cx="50" cy="50" r="40" fill="blue" />
    <circle id="circle2" cx="50" cy="50" r="40" fill="red" />
  </defs>
  <use x="50%" y="50%" href="#circle1" />
  <use x="25%" y="50%" href="#circle2" />
</svg>
```

We can access the computed values of the `x` attributes:

```js
const uses = document.querySelectorAll("use");
const xUse1 = uses[0].x;
const xUse2 = uses[1].x;

console.log(xUse1.baseVal.value); // output: 100 (50% of 200)
console.log(xUse2.baseVal.value); // output: 50 (25% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGUseElement.y")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
