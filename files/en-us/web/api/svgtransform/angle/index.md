---
title: "SVGTransform: angle property"
short-title: angle
slug: Web/API/SVGTransform/angle
page-type: web-api-instance-property
browser-compat: api.SVGTransform.angle
---

{{APIRef("SVG")}}

The **`angle`** read-only property of the {{domxref("SVGTransform")}} interface represents the angle of the transformation in degrees.

For `SVG_TRANSFORM_ROTATE`, `SVG_TRANSFORM_SKEWX`, and `SVG_TRANSFORM_SKEWY`, `angle` reflects the transformation's rotation or skewing angle.

For `SVG_TRANSFORM_MATRIX`, `SVG_TRANSFORM_TRANSLATE` and `SVG_TRANSFORM_SCALE`, `angle` will be zero.

## Value

An `integer`; the angle value in degrees as a float.

## Examples

### Accessing the `angle` property

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="green" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// Create and add a rotation transform
const rotateTransform = rect.ownerSVGElement.createSVGTransform();
rotateTransform.setRotate(45, 100, 100); // Rotate 45 degrees
transformList.appendItem(rotateTransform);

// Access the angle property
console.log(transformList.getItem(0).angle); // Output: 45
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
