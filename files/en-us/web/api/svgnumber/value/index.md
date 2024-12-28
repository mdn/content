---
title: "SVGNumber: value property"
short-title: value
slug: Web/API/SVGNumber/value
page-type: web-api-instance-property
browser-compat: api.SVGNumber.value
---

{{APIRef("SVG")}}

The **`value`** read-only property of the {{domxref("SVGNumber")}} interface represents the number.

## Value

A float.

## Examples

### Accessing the `value` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle id="myCircle" cx="100" cy="100" r="50" fill="blue" />
</svg>
```

```js
const circleElement = document.getElementById("myCircle");

// Access the radius (r) value property
const radiusValue = circleElement.r.baseVal.value;

console.log(radiusValue); // Output: 50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
