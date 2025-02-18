---
title: "SVGUseElement: width property"
short-title: width
slug: Web/API/SVGUseElement/width
page-type: web-api-instance-property
browser-compat: api.SVGUseElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGUseElement")}} interface describes the width of the referenced element as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("width")}} attribute on the {{SVGElement("use")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the width of the referenced element in the user coordinate system.

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
  <use x="50%" y="50%" href="#circle1" width="50" />
  <use x="25%" y="50%" href="#circle2" width="100" />
</svg>
```

We can access the computed values of the `width` attributes:

```js
const uses = document.querySelectorAll("use");
const widthUse1 = uses[0].width;
const widthUse2 = uses[1].width;

console.log(widthUse1.baseVal.value); // output: 50
console.log(widthUse2.baseVal.value); // output: 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGUseElement.height")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
