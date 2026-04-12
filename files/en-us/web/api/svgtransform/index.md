---
title: SVGTransform
slug: Web/API/SVGTransform
page-type: web-api-interface
browser-compat: api.SVGTransform
---

{{APIRef("SVG")}}

The **`SVGTransform`** interface reflects one of the component transformations within an {{ domxref("SVGTransformList") }}; thus, an `SVGTransform` object corresponds to a single component (e.g., `scale(…)` or `matrix(…)`) within a {{ SVGAttr("transform") }} attribute.

An `SVGTransform` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

## Instance properties

- {{domxref("SVGTransform.type", "type")}}
  - : The type of the value as specified by one of the `SVG_TRANSFORM_*` constants defined on this interface.
- {{domxref("SVGTransform.angle", "angle")}}
  - : The angle as a floating point value. A convenience attribute for `SVG_TRANSFORM_ROTATE`, `SVG_TRANSFORM_SKEWX` and `SVG_TRANSFORM_SKEWY`. For `SVG_TRANSFORM_MATRIX`, `SVG_TRANSFORM_TRANSLATE` and `SVG_TRANSFORM_SCALE`, `angle` will be zero.
- {{domxref("SVGTransform.matrix", "matrix")}}
  - : The matrix as a {{ domxref("DOMMatrix") }} that represents this transformation. The matrix object is live, meaning that any changes made to the `SVGTransform` object are immediately reflected in the matrix object and vice versa. In case the matrix object is changed directly (i.e., without using the methods on the `SVGTransform` interface itself) then the type of the `SVGTransform` changes to `SVG_TRANSFORM_MATRIX`.

## Instance methods

- {{domxref("SVGTransform.setMatrix", "setMatrix()")}}
  - : Sets the transform type to `SVG_TRANSFORM_MATRIX`, with parameter matrix defining the new transformation. Note that the values from the parameter `matrix` are copied.
- {{domxref("SVGTransform.setTranslate", "setTranslate()")}}
  - : Sets the transform type to `SVG_TRANSFORM_TRANSLATE`, with parameters `tx` and `ty` defining the translation amounts.
- {{domxref("SVGTransform.setScale", "setScale()")}}
  - : Sets the transform type to `SVG_TRANSFORM_SCALE`, with parameters `sx` and `sy` defining the scale amounts.
- {{domxref("SVGTransform.setRotate", "setRotate()")}}
  - : Sets the transform type to `SVG_TRANSFORM_ROTATE`, with parameter `angle` defining the rotation angle and parameters `cx` and `cy` defining the optional center of rotation.
- {{domxref("SVGTransform.setSkewX", "setSkewX()")}}
  - : Sets the transform type to `SVG_TRANSFORM_SKEWX`, with parameter `angle` defining the amount of skew.
- {{domxref("SVGTransform.setSkewY", "setSkewY()")}}
  - : Sets the transform type to `SVG_TRANSFORM_SKEWY`, with parameter `angle` defining the amount of skew.

## Static properties

- `SVG_TRANSFORM_UNKNOWN` (0)
  - : The unit type is not one of predefined unit types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `SVG_TRANSFORM_MATRIX` (1)
  - : A `matrix(…)` transformation.
- `SVG_TRANSFORM_TRANSLATE` (2)
  - : A `translate(…)` transformation.
- `SVG_TRANSFORM_SCALE` (3)
  - : A `scale(…)` transformation.
- `SVG_TRANSFORM_ROTATE` (4)
  - : A `rotate(…)` transformation.
- `SVG_TRANSFORM_SKEWX` (5)
  - : A `skewx(…)` transformation.
- `SVG_TRANSFORM_SKEWY` (6)
  - : A `skewy(…)` transformation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
