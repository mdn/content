---
title: "SVGFEOffsetElement: in1 property"
short-title: in1
slug: Web/API/SVGFEOffsetElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEOffsetElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEOffsetElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feOffset")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `in` attribute of `<feOffset>` element

In this example, we access the `in` attribute value of the `<feOffset>` element by using the `in1` read-only property of the `SVGFEOffsetElement` interface.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="offsetFilter">
      <!-- Applies an offset to the SourceGraphic -->
      <feOffset in="SourceGraphic" dx="10" dy="10" />
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

We can access the `in` attribute of the `feOffset` element.

```js
// Select the feOffset element
const offsetElement = document.querySelector("feOffset");

// Access the in1 property
console.log(offsetElement.in1.baseVal); // Output: "SourceGraphic"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
