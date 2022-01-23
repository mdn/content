---
title: CSSTransformValue.is2D
slug: Web/API/CSSTransformValue/is2D
tags:
  - API
  - CSS
  - CSS Typed Object Model API
  - CSSTransformValue
  - Experimental
  - Houdini
  - Property
  - is2D
browser-compat: api.CSSTransformValue.is2D
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The read-only **`is2D`** property of the
{{domxref("CSSTransformValue")}} interface returns whether the transform is 2D or 3D.

In the case of the `CSSTransformValue` this property returns
true unless any of the individual functions return false for `Is2D`, in which
case it returns false.

## Syntax

```js
var is2D = CSSTransformValue.is2D;
```

### Return value

A boolean. True indicates that the transform is a 2D transform, false that it is a 3D
transform.

## Examples

To Do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
