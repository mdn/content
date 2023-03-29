---
title: CSSTransformComponent.toString()
slug: Web/API/CSSTransformComponent/toString
page-type: web-api-instance-method
browser-compat: api.CSSTransformComponent.toString
---

{{APIRef("CSS Typed OM")}}

The **`toString()`** method of the {{domxref("CSSTransformComponent")}} interface is a {{Glossary("stringifier")}} returning a [CSS Transforms](/en-US/docs/Web/CSS/CSS_Transforms) function.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string in the form of a CSS {{cssxref("transform-function","Transforms function")}}.

This will use the value of `is2D` to return either a 2D or 3D transform. For example if the component represents {{domxref("CSSRotate")}} and `is2D` is false then the string returned will be in the form of the CSS transformation [`rotate3D()`](/en-US/docs/Web/CSS/transform-function/rotate3d) function. If true the string returned will be in the form of the 2-dimensional [`rotate3D()`](/en-US/docs/Web/CSS/transform-function/rotate) function.

## Examples

To Do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
