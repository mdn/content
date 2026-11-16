---
title: "SVGGraphicsElement: getScreenCTM() method"
short-title: getScreenCTM()
slug: Web/API/SVGGraphicsElement/getScreenCTM
page-type: web-api-instance-method
browser-compat: api.SVGGraphicsElement.getScreenCTM
---

{{APIRef("SVG")}}

The `getScreenCTM()` method of the {{domxref("SVGGraphicsElement")}} interface represents the matrix that transforms the current element's coordinate system to the coordinate system of the SVG viewport for the SVG document fragment.

## Syntax

```js-nolint
getScreenCTM()
```

### Parameters

None.

### Return value

A {{domxref("DOMMatrix")}} object.

## Examples

### Getting the Screen Transformation Matrix

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
  <!-- Circle with translation and scale -->
  <circle
    id="circle"
    cx="50"
    cy="50"
    r="30"
    fill="blue"
    transform="translate(100, 150) scale(2)" />
</svg>
```

```js
const circle = document.getElementById("circle");

// Get the current screen transformation matrix
const screenCTM = circle.getScreenCTM();

console.log("Screen transformation matrix:");
console.log(
  `a: ${screenCTM.a}, b: ${screenCTM.b}, c: ${screenCTM.c}, d: ${screenCTM.d}, e: ${screenCTM.e}, f: ${screenCTM.f}`,
);
// Output: a: 2, b: 0, c: 0, d: 2, e: 100, f: 150
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
