---
title: "SVGFECompositeElement: operator property"
short-title: operator
slug: Web/API/SVGFECompositeElement/operator
page-type: web-api-instance-property
browser-compat: api.SVGFECompositeElement.operator
---

{{APIRef("SVG")}}

The **`operator`** read-only property of the {{domxref("SVGFECompositeElement")}} interface reflects the {{SVGAttr("operator")}} attribute of the given {{SVGElement("feComposite")}} element.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

Using `over` operator in {{SVGElement("feComposite")}} element.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feComposite in="SourceGraphic" in2="BackgroundImage" operator="over" />
  </filter>
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    style="fill:blue;"
    filter="url(#filter1)" />
  <rect x="30" y="30" width="100" height="100" style="fill:green;" />
</svg>
```

Using `xor` operator on the same element.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feComposite in="SourceGraphic" in2="BackgroundImage" operator="over" />
  </filter>
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    style="fill:blue;"
    filter="url(#filter1)" />
  <rect x="30" y="30" width="100" height="100" style="fill:green;" />
</svg>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedEnumeration")}}
