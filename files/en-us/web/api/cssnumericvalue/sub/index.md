---
title: "CSSNumericValue: sub() method"
short-title: sub()
slug: Web/API/CSSNumericValue/sub
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.sub
---

{{APIRef("CSS Typed OM")}}

The **`sub()`** method of the
{{domxref("CSSNumericValue")}} interface subtracts a supplied number from the
`CSSNumericValue`.

## Syntax

```js-nolint
sub(number)
```

### Parameters

- `number`
  - : Either a number or a {{domxref('CSSMathSum')}}.

### Return value

A {{domxref('CSSMathSum')}}

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

```js
let mathSum = CSS.px("23")
  .sub(CSS.percent("4"))
  .sub(CSS.cm("3"))
  .sub(CSS.in("9"));
// Prints "calc(23px - 4% - 3cm - 9in)"
console.log(mathSum.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
