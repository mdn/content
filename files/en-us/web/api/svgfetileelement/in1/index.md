---
title: "SVGFETileElement: in1 property"
short-title: in1
slug: Web/API/SVGFETileElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFETileElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFETileElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feTile")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `in` Property of `feTile` Element

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="tileFilter">
      <!-- Tiles the SourceGraphic -->
      <feTile in="SourceGraphic" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:hotpink;"
    filter="url(#tileFilter)" />
</svg>
```

We can access the `in` attribute of the `feTile` element.

```js
// Select the feTile element
const tileElement = document.querySelector("feTile");

// Access the in1 property
console.log(tileElement.in1.baseVal); // Output: "SourceGraphic"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
