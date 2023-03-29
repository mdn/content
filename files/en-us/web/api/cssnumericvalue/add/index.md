---
title: CSSNumericValue.add()
slug: Web/API/CSSNumericValue/add
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.add
---

{{APIRef("CSS Typed OM")}}

The **`add()`** method of the
{{domxref("CSSNumericValue")}} interface adds a supplied number to the
`CSSNumericValue`.

## Syntax

```js-nolint
add(number)
```

### Parameters

- `number`
  - : Either a number or a {{domxref('CSSNumericValue')}}.

### Return value

A {{domxref('CSSMathSum')}}

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

```js
let mathSum = CSS.px("23")
  .add(CSS.percent("4"))
  .add(CSS.cm("3"))
  .add(CSS.in("9"));
// Prints "calc(23px + 4% + 3cm + 9in)"
console.log(mathSum.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
