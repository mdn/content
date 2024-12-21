---
title: "SVGFECompositeElement: k4 property"
short-title: k4
slug: Web/API/SVGFECompositeElement/k4
page-type: web-api-instance-property
browser-compat: api.SVGFECompositeElement.k4
---

{{APIRef("SVG")}}

The **`k4`** read-only property of the {{domxref("SVGFECompositeElement")}} interface reflects the {{SVGAttr("k4")}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

In this example, two {{SVGElement("feComposite")}} elements are defined in a filter, each with a different `k4` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feComposite k1="1" k2="2" k3="3" k4="4" operator="over" />
    <feComposite k1="5" k2="6" k3="7" k4="8" operator="in" />
  </filter>
  <rect width="100" height="100" style="fill:red;" filter="url(#filter1)" />
</svg>
```

We can access the `k4` attribute:

```js
const composites = document.querySelectorAll("feComposite");

console.log(composites[0].k4.baseVal); // output: 4
console.log(composites[1].k4.baseVal); // output: 8
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
