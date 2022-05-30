---
title: CSSNumericValue.mul()
slug: Web/API/CSSNumericValue/mul
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - mul()
browser-compat: api.CSSNumericValue.mul
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`mul()`** method of the
{{domxref("CSSNumericValue")}} interface multiplies the `CSSNumericValue` by
the supplied value.

## Syntax

```js
mul(number)
```

### Parameters

- `number`
  - : Either a number or a {{domxref('CSSNumericValue')}}.

### Return value

A {{domxref('CSSMathProduct')}}

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

```js
let mathSum = CSS.px("23").mul(CSS.percent("4")).mul(CSS.cm("3")).mul(CSS.in("9"));
// Prints "calc(23px * 4% * 3cm * 9in)"
console.log(mathSum.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
