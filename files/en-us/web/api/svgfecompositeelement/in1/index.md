---
title: "SVGFECompositeElement: in1 property"
short-title: in1
slug: Web/API/SVGFECompositeElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFECompositeElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFECompositeElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feComposite")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

In this example, two {{SVGElement("feComposite")}} elements are defined in a filter, each with a different `in` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feComposite in="SourceGraphic" operator="over" />
    <feComposite in="SourceGraphic" operator="in" />
  </filter>
  <rect width="100" height="100" style="fill:red;" filter="url(#filter1)" />
</svg>
```

We can access the `in` attribute:

```js
const composites = document.querySelectorAll("feComposite");

console.log(composites[0].in1.baseVal); // output: "SourceGraphic"
console.log(composites[1].in1.baseVal); // output: "SourceGraphic"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
