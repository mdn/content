---
title: "SVGFECompositeElement: in2 property"
short-title: in2
slug: Web/API/SVGFECompositeElement/in2
page-type: web-api-instance-property
browser-compat: api.SVGFECompositeElement.in2
---

{{APIRef("SVG")}}

The **`in2`** read-only property of the {{domxref("SVGFECompositeElement")}} interface reflects the {{SVGAttr("in2")}} attribute of the given {{SVGElement("feComposite")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

In this example, two {{SVGElement("feComposite")}} elements are defined in a filter, each with a different `in2` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feImage
      href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      width="200" />
    <feComposite in2="SourceAlpha" operator="over" />
    <feComposite in2="SourceAlpha" operator="in" />
  </filter>
  <circle cx="50" cy="50" r="30" filter="url(#filter1)" />
</svg>
```

We can access the `in2` attribute:

```js
const composites = document.querySelectorAll("feComposite");

console.log(composites[0].in2.baseVal); // output: "SourceAlpha"
console.log(composites[1].in2.baseVal); // output: "SourceAlpha"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
