---
title: CSSTransformComponent.toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSTransformComponent
  - Experimental
  - Houdini
  - Method
  - Reference
  - toMatrix
browser-compat: api.CSSTransformComponent.toMatrix
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`toMatrix()`** method of the
{{domxref("CSSTransformComponent")}} interface returns a {{domxref('DOMMatrix')}}
object.

All transform functions can be represented mathematically as a 4x4 transformation matrix. This is explained in detail in [Understanding the CSS Transforms matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/).

> **Note:** The `is2D` property affects what transform, and therefore type of matrix that will be returned. CSS 2D and 3D transforms are different for legacy reasons. A brief explanation of 2D vs. 3D transforms can be found in [Using CSS transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms).

## Syntax

```js
toMatrix()
```

### Parameters

None.

### Return value

A {{domxref('DOMMatrix')}} object

### Exceptions

- {{jsxref("TypeError")}}
  - : Raised if any lengths involved in generating the matrix are not compatible units
    with px (such as relative lengths or percentages).

## Examples

To Do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
