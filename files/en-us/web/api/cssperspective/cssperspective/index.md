---
title: "CSSPerspective: CSSPerspective() constructor"
short-title: CSSPerspective()
slug: Web/API/CSSPerspective/CSSPerspective
page-type: web-api-constructor
browser-compat: api.CSSPerspective.CSSPerspective
---

{{APIRef("CSS Typed OM")}}

The **`CSSPerspective()`** constructor creates
a new {{domxref("CSSPerspective")}} object representing the [perspective()](/en-US/docs/Web/CSS/transform-function/perspective) value of
the individual {{CSSXref('transform')}} property in CSS.

## Syntax

```js-nolint
new CSSPerspective(length)
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
