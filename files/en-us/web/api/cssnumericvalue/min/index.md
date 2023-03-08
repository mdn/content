---
title: CSSNumericValue.min()
slug: Web/API/CSSNumericValue/min
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.min
---

{{APIRef("CSS Typed OM")}}

The **`min()`** method of the
{{domxref("CSSNumericValue")}} interface returns the lowest value from among those
values passed. The passed values must be of the same type.

## Syntax

```js-nolint
min(number1, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN`
  - : Either a number or a {{domxref('CSSNumericValue')}}.

### Return value

A {{domxref('CSSUnitValue')}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

As stated earlier, all passed values must be of the same type and value. Some of the
following examples illustrate what happens when they are not.

```js
// Prints "1cm"
console.log(CSS.cm("1").min(CSS.cm("2")).toString());

// Prints "max(1cm, 0.393701in)"
console.log(CSS.cm("1").max(CSS.in("0.393701")).toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
