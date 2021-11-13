---
title: CSSTransformValue.toMatrix()
slug: Web/API/CSSTransformValue/toMatrix
tags:
  - API
  - CSS
  - CSS Typed Object Model API
  - CSSTransformValue
  - Experimental
  - Houdini
  - Method
  - toMatrix
browser-compat: api.CSSTransformValue.toMatrix
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`toMatrix()`** method of the
{{domxref("CSSTransformValue")}} interface returns a {{domxref('DOMMatrix')}} object.

## Syntax

```js
var matrix = CSSTransformValue.toMatrix();
```

### Parameters

None

### Return value

A {{domxref('DOMMatrix')}} object.

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
