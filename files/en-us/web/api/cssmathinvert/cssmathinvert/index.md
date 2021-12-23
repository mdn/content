---
title: CSSMathInvert()
slug: Web/API/CSSMathInvert/CSSMathInvert
tags:
  - API
  - CSS Typed Object Model API
  - CSSMathInvert
  - CSSNumericValue
  - Constructor
  - Experimental
  - Houdini
browser-compat: api.CSSMathInvert.CSSMathInvert
---
{{draft}}{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

The **`CSSMathInvert()`** constructor creates a
new {{domxref("CSSMathInvert")}} object which represents a CSS
{{CSSXref('calc()','calc()')}} used as `calc(1 / value)`

## Syntax

```js
var CSSMathInvert = new CSSMathInvert(arg);
```

### Parameters

- arg
  - : A {{domxref('CSSNumericValue')}}.

### Exceptions

- [`RangeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - : Raised if the arg is 0 or -0.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
