---
title: "SVGAnimatedNumber: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedNumber/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumber.baseVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedNumber.baseVal`** property of the {{domxref("SVGAnimatedNumber")}} interface represents the base (non-animated) value of an animatable numeric attribute.

For attributes that accept a single numeric value, `baseVal` reflects the current value of the attribute. For attributes accepting a numeric value followed by an optional second numeric value, it reflects the current value of one of the two numbers, depending on the context.

## Steps for Accessing or Setting baseVal

1. **Getting `baseVal`**:

   - Retrieve the value of the reflected attribute, or use its initial value if not present or invalid.
   - If the attribute accepts two numeric values:
     - If this object reflects the first number, return the first value.
     - If this object reflects the second number, return the second value if explicitly specified, or the implicit value as defined by the attribute.
   - Otherwise, return the single numeric value of the attribute.

2. **Setting `baseVal`**:
   - Assign the new value to `baseVal`.
   - Construct a list of numeric values to represent the updated attribute value:
     - If the attribute accepts two numeric values, update either the first or second number as reflected by the object, preserving the other.
     - Otherwise, set the attribute to the new single numeric value.
   - Serialize the list of numbers joined and separated by a single `U+0020` SPACE character and set it as the content attribute.

## Value

A `float` representing the base (non-animated) value of the reflected attribute.

## Examples

```js
// Create an SVG element with a numeric attribute
const svgNamespace = "http://www.w3.org/2000/svg";
const path = document.createElementNS(svgNamespace, "path");

// Set the animatable 'pathLength' attribute
path.setAttribute("pathLength", "10");

// Access the SVGAnimatedNumber object
const animatedNumber = path.pathLength;

// Get the base value
console.log(animatedNumber.baseVal); // Outputs: 10

// Modify the base value
animatedNumber.baseVal = 15;

// Verify the reflected attribute value
console.log(path.getAttribute("pathLength")); // Outputs: "15"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGElement")}}
