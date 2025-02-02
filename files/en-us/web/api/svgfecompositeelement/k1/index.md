---
title: "SVGFECompositeElement: k1 property"
short-title: k1
slug: Web/API/SVGFECompositeElement/k1
page-type: web-api-instance-property
browser-compat: api.SVGFECompositeElement.k1
---

{{APIRef("SVG")}}

The **`k1`** read-only property of the {{domxref("SVGFECompositeElement")}} interface reflects the {{SVGAttr("k1")}} attribute of the given {{SVGElement("feComposite")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

In this example, two {{SVGElement("feComposite")}} elements are defined in a filter, each with a different `k1` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feImage
      href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      width="140"
      x="30"
      y="10" />
    <feComposite
      in2="SourceGraphic"
      operator="arithmetic"
      k1="0.1"
      k2="0.2"
      k3="0.3"
      k4="0.4" />
  </filter>
  <circle cx="100" cy="50" r="30" filter="url(#filter1)" />
</svg>
```

We can access the `k1` attribute:

```js
const composites = document.querySelectorAll("feComposite");

console.log(composites[0].k1.baseVal); // output: 0.1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
