---
title: "SVGFEOffsetElement: dy property"
short-title: dy
slug: Web/API/SVGFEOffsetElement/dy
page-type: web-api-instance-property
browser-compat: api.SVGFEOffsetElement.dy
---

{{APIRef("SVG")}}

The **`dy`** read-only property of the {{domxref("SVGFEOffsetElement")}} interface reflects the {{SVGAttr("dy")}} attribute of the given {{SVGElement("feOffset")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `dy` attribute

In this example, we access the vertical offset, or shift, of the `<feOffset>` element, using the `dy` read-only property of the `SVGFEOffsetElement` interface.

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

// Access the dy property
console.log(offsetElement.dy.baseVal); // Output: 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
