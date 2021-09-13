---
title: CSSPerspective()
slug: Web/API/CSSPerspective/CSSPerspective
tags:
  - API
  - CSS Typed Object Model API
  - CSSPerspective
  - CSSTransformComponent
  - CSSTransformValue
  - Constructor
  - Experimental
  - Houdini
browser-compat: api.CSSPerspective.CSSPerspective
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}{{draft}}

The **`CSSPerspective()`** constructor creates
a new {{domxref("CSSPerspective")}} object representing the [perspective()](</en-US/docs/Web/CSS/transform-function/perspective()>) value of
the individual {{CSSXref('transform')}} property in CSS.

## Syntax

```js
var CSSPerspective = new CSSPerspective(length);
```

### Parameters

- {{domxref('CSSPerspective.length','length')}}
  - : A value for the distance from z=0 of the {{domxref('CSSPerspective')}} object to be
    constructed. This must be a {{cssxref('length')}}.

### Exceptions

- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Raised if the value of `CSSPerspective.length` exists but is not a
    {{cssxref('length')}}.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
