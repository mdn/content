---
title: "SVGUseElement: y property"
short-title: y
slug: Web/API/SVGUseElement/y
page-type: web-api-instance-property
browser-compat: api.SVGUseElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGUseElement")}} interface describes the y-axis coordinate of the start point of the referenced element as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("y")}} attribute on the {{SVGElement("use")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the y-coordinate of the top-left corner of the referenced element in the user coordinate system.

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
  <use x="25%" y="25%" href="#circle2" />
</svg>
```

We can access the computed values of the `y` attributes:

```js
const uses = document.querySelectorAll("use");
const yUse1 = uses[0].y;
const yUse2 = uses[1].y;

console.log(yUse1.baseVal.value); // output: 100 (50% of 200)
console.log(yUse2.baseVal.value); // output: 50 (25% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGUseElement.x")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
