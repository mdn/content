---
title: CSSSkew()
slug: Web/API/CSSSkew/CSSSkew
tags:
  - API
  - CSS
  - CSS Typed Object Model API
  - CSSSkew
  - CSSTransformComponent
  - CSSTransformValue
  - Constructor
  - Experimental
  - Houdini
browser-compat: api.CSSSkew.CSSSkew
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}{{draft}}

The **`CSSSkew()`** constructor creates a new
{{domxref("CSSSkew")}} object which represents the
[`skew()`](</en-US/docs/Web/CSS/transform-function/skew()>) value
of the individual {{CSSXRef('transform')}} property in CSS.

## Syntax

```js
var CSSSkew = new CSSSkew(ax, ay);
```

### Parameters

- {{domxref('CSSSkew.ax','ax')}}
  - : A value for the `ax` (x-axis) angle of the {{domxref('CSSSkew')}} object to be constructed. This must be a {{domxref('CSSNumericValue')}}.
- {{domxref('CSSSkew.ay','ay')}}
  - : A value for the `ay` (y-axis) angle of the {{domxref('CSSSkew')}} object to be constructed. This must be a {{domxref('CSSNumericValue')}}.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
