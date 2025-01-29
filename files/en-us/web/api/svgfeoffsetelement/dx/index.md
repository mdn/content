---
title: "SVGFEOffsetElement: dx property"
short-title: dx
slug: Web/API/SVGFEOffsetElement/dx
page-type: web-api-instance-property
browser-compat: api.SVGFEOffsetElement.dx
---

{{APIRef("SVG")}}

The **`dx`** read-only property of the {{domxref("SVGFEOffsetElement")}} interface reflects the {{SVGAttr("dx")}} attribute of the given {{SVGElement("feOffset")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `dx` attribute

In this example, we access the amount to offset, or horizontal shift, of the `<feOffset>` element, using the `dx` read-only property of the `SVGFEOffsetElement` interface.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="offsetFilter">
      <!-- Applies an offset to the SourceGraphic -->
      <feOffset in="SourceGraphic" dx="15" dy="10" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#offsetFilter)" />
</svg>
```

```js
// Select the feOffset element
const offsetElement = document.querySelector("feOffset");

// Access the dx property
console.log(offsetElement.dx.baseVal); // Output: 15
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
