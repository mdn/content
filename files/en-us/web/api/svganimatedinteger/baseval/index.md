---
title: "SVGAnimatedInteger: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedInteger/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedInteger.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** property of the {{domxref("SVGAnimatedInteger")}} interface represents the base (non-animated) value of an animatable [`<integer>`](/en-US/docs/Web/SVG/Content_type#integer).

For attributes that accept a single integer value, `baseVal` reflects the current value of the attribute. For attributes accepting an integer followed by an optional second integer, it reflects the current value of one of the two integers, depending on the context.

## Steps for Accessing or Setting baseVal

1. **Getting `baseVal`**:

   - Retrieve the value of the reflected attribute, or use its initial value if not present or invalid.
   - If the attribute accepts two integers:
     - If this object reflects the first integer, return the first value.
     - If this object reflects the second integer, return the second value if explicitly specified, or the implicit value as defined by the attribute.
   - Otherwise, return the single integer value of the attribute.

2. **Setting `baseVal`**:
   - Assign the new value to `baseVal`.
   - Construct a list of integers to represent the updated attribute value:
     - If the attribute accepts two integers, update either the first or second integer as reflected by the object, preserving the other.
     - Otherwise, set the attribute to the new single integer value.
   - Serialize the list of integers joined and separated by a single `U+0020` SPACE character and set it as the content attribute.

## Value

A `long` integer representing the base (non-animated) value of the reflected attribute.

## Examples

```js
const feTurbulence = document.querySelector("[feTurbulence]");

// Set the animatable 'numOctaves' attribute
feTurbulence.setAttribute("numOctaves", "4");

// Access the SVGAnimatedInteger object
const animatedInteger = feTurbulence.numOctaves;

// Get the base value
console.log(animatedInteger.baseVal); // Outputs: 4

// Modify the base value
animatedInteger.baseVal = 6;

// Verify the reflected attribute value
console.log(feTurbulence.getAttribute("numOctaves")); // Outputs: "6"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger.animVal")}}
