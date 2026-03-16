---
title: "CSSNumericValue: to() method"
short-title: to()
slug: Web/API/CSSNumericValue/to
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.to
---

{{APIRef("CSS Typed OM")}}

The **`to()`** method of the {{domxref("CSSNumericValue")}} interface converts a numeric value from one unit to another.

## Syntax

```js-nolint
to(unit)
```

### Parameters

- `unit`
  - : The unit to which you want to convert.

### Return value

A {{domxref('CSSUnitValue')}}.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if an invalid unit was passed to the method.
- {{jsxref("TypeError")}}
  - : Thrown if:
    - The `CSSNumericValue` on which the method is being called can't be resolved to a single value and type.
      This might occur if the value is calculated from a variable when the value of that variable can't be known in the context.
    - The value can't be converted to the new unit because it's not of the same category.
      For example, you can't convert meters to seconds.

## Examples

### Basic usage

```js
// Prints "0.608542cm"
console.log(CSS.px("23").to("cm").toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
