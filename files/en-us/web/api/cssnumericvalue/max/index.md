---
title: CSSNumericValue.max()
slug: Web/API/CSSNumericValue/max
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - max()
browser-compat: api.CSSNumericValue.max
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`max()`** method of the
{{domxref("CSSNumericValue")}} interface returns the highest value from among the values
passed. The passed values must be of the same type.

## Syntax

```js
max(number1, /* …, */ numberN)
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
// Prints "2cm"
console.log(CSS.cm("1").max(CSS.cm("2")).toString());

// Prints "max(1cm, 0.393701in)"
console.log(CSS.cm("1").max(CSS.in("0.393701")).toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
