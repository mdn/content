---
title: CSSNumericValue.to()
slug: Web/API/CSSNumericValue/to
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - to()
browser-compat: api.CSSNumericValue.to
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`to()`** method of the
{{domxref("CSSNumericValue")}} interface converts a numeric value from one unit to
another.

## Syntax

```js
to(unit)
```

### Parameters

- `unit`
  - : The unit to which you want to convert.

### Return value

A {{domxref('CSSMathSum')}}.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if an invalid type was passed to the method.
- {{jsxref("TypeError")}}
  - : Thrown if the passed values cannot be summed.

## Examples

```js
// Prints "0.608542cm"
console.log(CSS.px("23").to("cm").toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
