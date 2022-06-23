---
title: CSSTranslate()
slug: Web/API/CSSTranslate/CSSTranslate
page-type: web-api-constructor
tags:
  - API
  - CSS Typed Object Model API
  - CSSTransformComponent
  - CSSTransformValue
  - CSSTranslate
  - Constructor
  - Experimental
  - Houdini
browser-compat: api.CSSTranslate.CSSTranslate
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`CSSTranslate()`** constructor creates a
new {{domxref("CSSTranslate")}} object representing the [translate()](/en-US/docs/Web/CSS/transform-function/translate) value of the
individual {{CSSXref('transform')}} property in CSS.

## Syntax

```js
new CSSTranslate(x, y)
new CSSTranslate(x, y, z)
```

### Parameters

- {{domxref('CSSTranslate.x','x')}}
  - : A value for the x-axis of the {{domxref('CSSTranslate')}} object to be constructed.
    This must be a {{cssxref('length-percentage')}}.
- {{domxref('CSSTranslate.y','y')}}
  - : A value for the y-axis of the {{domxref('CSSTranslate')}} object to be constructed.
    This must be a {{cssxref('length-percentage')}}.
- {{domxref('CSSTranslate.z','z')}} {{optional_inline}}

  - : A value for the z-axis of the {{domxref('CSSTranslate')}} object to be constructed.
    This must be a {{cssxref('length')}}.

    If a value is passed for the `z-axis` this is a 3d transform. The value of
    `is2D` will be set to false.

### Exceptions

- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Raised if the value of `CSSTranslate.x` or `CSSTranslate.y` is
    not a {{cssxref('length-percentage')}}.
- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Raised if the value of `CSSTranslate.z` exists but is not a
    {{cssxref('length')}}.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
