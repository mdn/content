---
title: "SVGFEComponentTransferElement: in1 property"
short-title: in1
slug: Web/API/SVGFEComponentTransferElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEComponentTransferElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEComponentTransferElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feComponentTransfer")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

In this example, two {{SVGElement("feComponentTransfer")}} elements are defined in a filter, each with a different `in` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feComponentTransfer in="SourceGraphic">
      <feFuncR type="table" tableValues="0 1" />
    </feComponentTransfer>
    <feComponentTransfer in="BackgroundImage">
      <feFuncR type="table" tableValues="0.5 1" />
    </feComponentTransfer>
  </filter>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#filter1)" />
  <circle cx="100" cy="100" r="50" style="fill:blue;" filter="url(#filter1)" />
</svg>
```

We can access the `in` attribute:

```js
const componentTransfers = document.querySelectorAll("feComponentTransfer");

console.log(componentTransfers[0].in1.baseVal); // Output: "SourceGraphic"
console.log(componentTransfers[1].in1.baseVal); // Output: "BackgroundImage"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
