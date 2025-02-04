---
title: "SVGTransform: setTranslate() method"
short-title: setTranslate()
slug: Web/API/SVGTransform/setTranslate
page-type: web-api-instance-method
browser-compat: api.SVGTransform.setTranslate
---

{{APIRef("SVG")}}

The `setTranslate()` method of the {{domxref("SVGTransform")}} interface sets the transform type to `SVG_TRANSFORM_TRANSLATE`, with parameters `tx` and `ty` defining the translation amounts.

## Syntax

```js-nolint
setTranslate(tx, ty)
```

### Parameters

- `tx`
  - : A float defining the translation amount along the X-axis.
- `ty`
  - : A float defining the translation amount along the Y-axis.

### Return value

None ({{jsxref('undefined')}}).

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the attribute or the {{domxref("SVGTransform")}} object is read-only.

## Examples

### Setting Translation Values

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Set the translation values for the transform
transform.setTranslate(100, 50);

// Output the translation details
console.log(`X Translation:  ${transform.matrix.e}`); // Output: 100
console.log(`Y Translation: ${transform.matrix.f}`); // Output: 50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
