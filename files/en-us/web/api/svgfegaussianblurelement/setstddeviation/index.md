---
title: "SVGFEGaussianBlurElement: setStdDeviation() method"
short-title: setStdDeviation()
slug: Web/API/SVGFEGaussianBlurElement/setStdDeviation
page-type: web-api-instance-method
browser-compat: api.SVGFEGaussianBlurElement.setStdDeviation
---

{{APIRef("SVG")}}

The `setStdDeviation()` method of the {{domxref("SVGFEGaussianBlurElement")}} interface sets the values for the {{SVGAttr("stdDeviation")}} attribute.

## Syntax

```js-nolint
setStdDeviation(x, y)
```

### Parameters

- `x`
  - : A float representing X component of the {{SVGAttr("stdDeviation")}} attribute.
- `y`
  - : A float representing Y component of the {{SVGAttr("stdDeviation")}} attribute.

### Return value

None ({{jsxref('undefined')}}).

## Examples

### Using `setStdDeviation()`

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="gaussian-blur-filter">
      <feGaussianBlur
        in="SourceGraphic"
        stdDeviation="5 5"
        result="blurred-graphic" />
    </filter>
  </defs>

  <!-- Rectangle with an initial blur effect -->
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    style="fill:hotpink;"
    filter="url(#gaussian-blur-filter)" />
</svg>

<!-- Button to update the blur -->
<button id="updateBlur">Update Blur</button>
```

```js
// Get the feGaussianBlur element
const gaussianBlur = document.querySelector("feGaussianBlur");

// Button to trigger the update
document.getElementById("updateBlur").addEventListener("click", () => {
  // Change the standard deviation (blur radius) of the blur effect
  gaussianBlur.setStdDeviation(15, 20); // Update to X: 15, Y: 20
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLength")}}
