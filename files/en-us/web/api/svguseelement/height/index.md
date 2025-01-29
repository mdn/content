---
title: "SVGUseElement: height property"
short-title: height
slug: Web/API/SVGUseElement/height
page-type: web-api-instance-property
browser-compat: api.SVGUseElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGUseElement")}} interface describes the height of the referenced element as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("height")}} attribute on the {{SVGElement("use")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the height of the referenced element in the user coordinate system.

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
  <use x="50%" y="50%" href="#circle1" height="50" />
  <use x="25%" y="50%" href="#circle2" height="100" />
</svg>
```

We can access the computed values of the `height` attributes:

```js
const uses = document.querySelectorAll("use");
const heightUse1 = uses[0].height;
const heightUse2 = uses[1].height;

console.log(heightUse1.baseVal.value); // output: 50
console.log(heightUse2.baseVal.value); // output: 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGUseElement.width")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
