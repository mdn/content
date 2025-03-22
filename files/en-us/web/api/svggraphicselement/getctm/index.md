---
title: "SVGGraphicsElement: getCTM() method"
short-title: getCTM()
slug: Web/API/SVGGraphicsElement/getCTM
page-type: web-api-instance-method
browser-compat: api.SVGGraphicsElement.getCTM
---

{{APIRef("SVG")}}

The `getCTM()` method of the {{domxref("SVGGraphicsElement")}} interface represents the matrix that transforms the current element's coordinate system to its SVG viewport's coordinate system.

## Syntax

```js-nolint
getCTM()
```

### Parameters

None.

### Return value

A {{domxref("DOMMatrix")}} object.

## Examples

### Getting the Transformation Matrix

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
  <!-- Circle transformed using translation -->
  <circle
    id="circle"
    cx="50"
    cy="50"
    r="30"
    fill="blue"
    transform="translate(100, 150)" />
</svg>
```

```js
const circle = document.getElementById("circle");

// Get the current transformation matrix
const ctm = circle.getCTM();

console.log("Matrix values:");
console.log(
  `a: ${ctm.a}, b: ${ctm.b}, c: ${ctm.c}, d: ${ctm.d}, e: ${ctm.e}, f: ${ctm.f}`,
);
// Output: Matrix values: a: 1, b: 0, c: 0, d: 1, e: 100, f: 150
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
